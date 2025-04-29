// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import ContactFormEmail from "@/emails/ContactFormEmail";
import React from "react";

// Схема валидации Zod
const FormDataSchema = z.object({
  name: z.string().min(1, "Имя обязательно"),
  contactInfo: z.string().min(1, "Контактная информация обязательна"),
  service: z.string().optional(),
  message: z.string().min(1, "Сообщение обязательно"),
});

// Инициализация Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validationResult = FormDataSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Неверные данные формы",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, contactInfo, service, message } = validationResult.data;

    if (!process.env.RESEND_API_KEY) {
      console.error("Resend API Key is not set.");
      return NextResponse.json(
        { error: "Ошибка конфигурации сервера" },
        { status: 500 }
      );
    }

    // --- ИЗМЕНЕНИЯ ДЛЯ ОТПРАВКИ БЕЗ ВЕРИФИКАЦИИ ДОМЕНА ---
    // Используем специальный адрес Resend в поле 'from'
    const senderEmail = "onboarding@resend.dev";
    // Получатель ДОЛЖЕН БЫТЬ email'ом вашего аккаунта Resend
    const emailToSendTo = "domosedov@mail.ru"; // Убедитесь, что это email вашего аккаунта Resend!

    const { data, error } = await resend.emails.send({
      // В 'from' указываем onboarding@resend.dev. Имя может быть любым.
      from: `Komplex Media Form <${senderEmail}>`,
      to: [emailToSendTo], // Отправляем на email вашего аккаунта Resend
      subject: `Новая заявка с сайта от ${name}`,
      // Reply-To будет работать, Resend подставит его правильно
      replyTo: contactInfo.includes("@") ? contactInfo : undefined,
      react: ContactFormEmail({
        name,
        contactInfo,
        service,
        message,
      }) as React.ReactElement,
    });
    // --- КОНЕЦ ИЗМЕНЕНИЙ ---

    if (error) {
      console.error("Resend error:", error);
      // Добавим детали ошибки в ответ для отладки
      return NextResponse.json(
        {
          error: "Ошибка при отправке сообщения через Resend",
          details: error.message,
        },
        { status: 500 }
      );
    }

    console.log("Resend success data:", data);
    return NextResponse.json({
      success: true,
      message: "Сообщение успешно отправлено!",
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
