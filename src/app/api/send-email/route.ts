// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";
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
  service: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Сообщение обязательно").max(5000),
  website: z.string().max(200).optional(),
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

    const { name, contactInfo, service, message, website } = validationResult.data;

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

    const isWindows = process.platform === "win32";
    const transporter = nodemailer.createTransport({
      sendmail: true,
      path: isWindows
        ? "C:\\Windows\\System32\\OpenSSH\\ssh.exe"
        : "/usr/bin/ssh",
      args: [
        isWindows
          ? "C:\\Users\\darvo\\.ssh\\complexmedia_forn_mail_vps_ed25519"
          : "/home/ubuntu/.ssh/complexmedia_forn_mail_vps_ed25519",
        "-o",
        "BatchMode=yes",
        "-o",
        "ConnectTimeout=10",
        "-o",
        "IdentitiesOnly=yes",
        "-o",
        "StrictHostKeyChecking=yes",
        "complexmedia_forn@46.23.98.66",
        "/usr/sbin/sendmail",
        "-i",
        "-f",
        "info@complexmedia.ru",
      ],
    });

    await transporter.sendMail({
      from: "Complex Media <info@complexmedia.ru>",
      to: "domosedov@mail.ru",
      subject: `Новая заявка с сайта от ${name}`,
      replyTo: z.string().email().safeParse(contactInfo).success
        ? contactInfo
        : undefined,
      html: await render(
        createElement(ContactFormEmail, {
          name,
          contactInfo,
          service,
          message,
        }),
      ),
    });

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
