// src/app/contact/page.tsx
// 'use server'; // Убираем эту директиву, т.к. Server Action больше не здесь

import React from "react";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { ArrowRight, Mail } from "lucide-react"; // Убрали Send, т.к. он в форме
// Импортируем новый компонент формы
import ContactFormFetch from "@/components/ContactFormFetch"; // Обновленный путь

export default function ContactPage() {
  const telegramBotLink = "https://t.me/complexmedia_bot"; // ЗАМЕНИТЕ
  const contactEmail = "info@complexmedia.ru"; // ЗАМЕНИТЕ
  const personalTelegramLink = null; // ЗАМЕНИТЕ или уберите

  return (
    <PageWrapper
      title="Свяжитесь с нами"
      showCta={true}
      telegramBotLink={telegramBotLink}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Левая колонка */}
          <div className="space-y-8">
            {/* Блок 1: Telegram Бот */}
            <div className="bg-secondary-dark/60 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10 shadow-lg">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                Предпочитаемый способ: Telegram Бот
              </h2>
              <p className="text-text-muted mb-5">
                Для быстрого старта и структурированного сбора требований по
                вашему проекту, пожалуйста, воспользуйтесь нашим Telegram ботом.
              </p>
              <Link
                href={telegramBotLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-base"
              >
                Начать брифинг в Telegram
                <ArrowRight size={18} />
              </Link>
            </div>
            {/* Блок 2: Альтернативные способы */}
            <div className="bg-secondary-dark/60 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10 shadow-lg">
              <h2 className="text-2xl font-semibold text-text-light mb-4">
                Альтернативные способы
              </h2>
              <p className="text-text-muted mb-5">
                Если бот вам не подходит, вы можете связаться с нами напрямую:
              </p>
              <div className="space-y-3">
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-3 text-text-muted hover:text-[--color-accent-red] transition-colors group"
                >
                  <Mail
                    size={20}
                    className="flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span>{contactEmail}</span>
                </a>
                {personalTelegramLink && (
                  <a
                    href={personalTelegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-muted hover:text-[--color-accent-red] transition-colors group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-send flex-shrink-0 group-hover:scale-110 transition-transform"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="m22 2-11 11" />
                    </svg>
                    <span>Написать в Telegram</span>
                  </a>
                )}
              </div>
            </div>
          </div>
          {/* Правая колонка */}
          <div>
            {/* Используем новый компонент формы */}
            <ContactFormFetch />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
