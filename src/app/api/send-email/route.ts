// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import { createElement } from "react";
import { z } from "zod";
import ContactFormEmail from "@/emails/ContactFormEmail";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const requestWindows = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: NextRequest) {
  return (
    req.headers.get("x-real-ip")?.trim() ||
    req.headers.get("x-forwarded-for")?.split(",", 1)[0]?.trim() ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();

  for (const [key, window] of requestWindows) {
    if (window.resetAt <= now) requestWindows.delete(key);
  }

  const current = requestWindows.get(ip);
  if (!current || current.resetAt <= now) {
    requestWindows.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

// Схема валидации Zod
const FormDataSchema = z.object({
  name: z.string().trim().min(1, "Имя обязательно").max(100),
  contactInfo: z
    .string()
    .trim()
    .min(1, "Контактная информация обязательна")
    .max(200),
  company: z.string().trim().max(200).optional(),
  role: z.string().trim().max(120).optional(),
  service: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Сообщение обязательно").max(5000),
  website: z.string().max(200).optional(),
  utm_source: z.string().trim().max(100).optional(),
  utm_medium: z.string().trim().max(100).optional(),
  utm_campaign: z.string().trim().max(100).optional(),
  utm_term: z.string().trim().max(100).optional(),
  utm_content: z.string().trim().max(100).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const validationResult = FormDataSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Неверные данные формы",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const {
      name,
      contactInfo,
      company,
      role,
      service,
      message,
      website,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    } = validationResult.data;

    // Honeypot: обычный пользователь это поле не видит и не заполняет.
    if (website?.trim()) {
      return NextResponse.json({ success: true });
    }

    if (isRateLimited(getClientIp(req))) {
      return NextResponse.json(
        { error: "Слишком много заявок. Попробуйте позже." },
        { status: 429, headers: { "Retry-After": "600" } },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) throw new Error("RESEND_API_KEY is not configured");

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Complex Media <forms@notify.complexmedia.ru>",
        to: ["domosedov@mail.ru"],
        subject: `Новая заявка с сайта от ${name}`,
        reply_to: z.string().email().safeParse(contactInfo).success
          ? contactInfo
          : undefined,
        html: await render(
          createElement(ContactFormEmail, {
            name,
            contactInfo,
            company,
            role,
            service,
            message,
            utmSource: utm_source,
            utmMedium: utm_medium,
            utmCampaign: utm_campaign,
            utmTerm: utm_term,
            utmContent: utm_content,
          }),
        ),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!emailResponse.ok) {
      console.error("Resend email request failed", {
        status: emailResponse.status,
      });
      throw new Error(`Resend API returned ${emailResponse.status}`);
    }

    return NextResponse.json({
      success: true,
      message: "Сообщение успешно отправлено!",
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 },
    );
  }
}
