// src/app/contact/page.tsx
import React from "react";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { ArrowRight } from "lucide-react";
import { ContactFormFetch } from "@/components/ContactFormFetch"; // <-- Импортируем компонент формы

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты | Комплекс Медиа",
  description:
    "Свяжитесь с нами для обсуждения проекта. Создайте ТЗ на сайт через Telegram бота или напишите нам для консультации по автоматизации и разработке AI-решений.",
};

export default function ContactPage() {
  // --- НАСТРОЙКА ---
  const telegramBotLink = "https://t.me/complexmedia_bot";
  const personalTelegramLink = "https://t.me/domosedoff"; // Ваша личная ссылка
  // --- КОНЕЦ НАСТРОЙКИ ---

  return (
    <PageWrapper
      title="Свяжитесь с нами"
      showCta={false}
      telegramBotLink={telegramBotLink}
      personalTelegramLink={personalTelegramLink}
    >
      {/* Используем сетку из двух колонок */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        {/* Левая колонка: Прямые контакты */}
        <div className="space-y-8">
          {/* Блок 1: Создать ТЗ на сайт */}
          <div className="bg-secondary-dark/60 backdrop-blur-sm p-8 rounded-lg border border-white/10 shadow-lg flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold text-text-light mb-3">
              Разработка сайта
            </h2>
            <p className="text-text-muted mb-6 flex-grow">
              Для структурированного сбора требований по вашему будущему сайту,
              пожалуйста, воспользуйтесь нашим Telegram ботом.
            </p>
            <Link
              href={telegramBotLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-base mt-auto"
            >
              Создать ТЗ в Telegram
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Блок 2: Обсудить автоматизацию */}
          <div className="bg-secondary-dark/60 backdrop-blur-sm p-8 rounded-lg border border-white/10 shadow-lg flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold text-text-light mb-3">
              Обсудить автоматизацию ИИ
            </h2>
            <p className="text-text-muted mb-6 flex-grow">
              Для консультации по AI-ботам, агентам и другим задачам
              автоматизации.
            </p>
            <Link
              href={personalTelegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-text-light hover:text-[--color-accent-red] font-semibold transition-colors text-lg mt-auto"
            >
              Связь с менеджером
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Правая колонка: Форма обратной связи */}
        <div>
          {/* Рендерим компонент формы, который мы создавали ранее */}
          <ContactFormFetch />
        </div>
      </div>
    </PageWrapper>
  );
}
