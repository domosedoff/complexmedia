// src/app/contact/page.tsx
import React from "react";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { ArrowRight } from "lucide-react";
import { ContactFormFetch } from "@/components/ContactFormFetch"; // <-- Импортируем компонент формы

import { createPageMetadata } from "@/seo";

export const metadata = createPageMetadata({
  title: "Контакты",
  description:
    "Обсудите разработку сайта, ИИ-бота, ИИ-агента, корпоративной базы знаний или автоматизацию бизнес-процессов с Комплекс Медиа.",
  path: "/contact",
});

export default function ContactPage() {
  // --- НАСТРОЙКА ---
  const personalTelegramLink = "https://t.me/domosedoff"; // Ваша личная ссылка
  // --- КОНЕЦ НАСТРОЙКИ ---

  return (
    <PageWrapper
      title="Свяжитесь с нами"
      showCta={false}
      personalTelegramLink={personalTelegramLink}
    >
      {/* Используем сетку из двух колонок */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        {/* Левая колонка: Прямые контакты */}
        <div className="space-y-8">
          <div className="bg-secondary-dark/60 backdrop-blur-sm p-8 rounded-lg border border-white/10 shadow-lg flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold text-text-light mb-3">
              Обсудить проект
            </h2>
            <p className="text-text-muted mb-6 flex-grow">
              Для консультации по разработке сайта, AI-ботам, агентам и другим
              задачам автоматизации.
            </p>
            <a
              href="tel:+74951085316"
              className="text-xl font-semibold text-text-light hover:text-[--color-accent-red] transition-colors mb-4"
            >
              +7 (495) 108-53-16
            </a>
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
