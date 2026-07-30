// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { createElement } from "react";
import { z } from "zod";
import ContactFormEmail from "@/emails/ContactFormEmail";

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

    const { name, contactInfo, service, message } = validationResult.data;

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
