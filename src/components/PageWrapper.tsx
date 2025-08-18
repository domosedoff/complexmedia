// src/components/PageWrapper.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageWrapperProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  showCta?: boolean;
  telegramBotLink?: string;
  personalTelegramLink?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  title,
  className = "",
  showCta = false,
  telegramBotLink = "#",
  personalTelegramLink = "#",
}) => {
  return (
    <section className={`container mx-auto px-4 ${className}`}>
      {/* Плашка для заголовка */}
      {title && (
        <div className="bg-secondary-dark/60 backdrop-blur-sm py-8 md:py-10 rounded-lg border border-white/10 shadow-lg text-center mt-16 md:mt-24 mb-10 md:mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light">
            {title}
          </h1>
        </div>
      )}

      {/* Основной контент */}
      <div className="pb-16 md:pb-24">{children}</div>

      {/* Опциональный CTA блок */}
      {showCta && (
        <div className="bg-secondary-dark/60 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-white/10 shadow-lg text-center my-16 md:my-20">
          <h2 className="text-2xl md:text-3xl font-bold text-text-light mb-4 max-w-2xl mx-auto">
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-text-muted mb-8 max-w-lg mx-auto">
            Выберите наиболее подходящий способ для вашего запроса.
          </p>
          {/* --- ИЗМЕНЕННЫЙ БЛОК КНОПОК --- */}
          {/* Основные CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-6">
            {" "}
            {/* Увеличили gap */}
            {/* Ссылка 1: Создать ТЗ на сайт */}
            <Link
              href={telegramBotLink}
              target="_blank"
              rel="noopener noreferrer"
              // Стили текстовой ссылки со стрелкой
              className="inline-flex items-center justify-center gap-2 text-text-light hover:text-[--color-accent-red] font-semibold transition-colors text-lg"
            >
              Создать ТЗ на сайт
              <ArrowRight size={20} />
            </Link>
            {/* Ссылка 2: Обсудить автоматизацию */}
            <Link
              href={personalTelegramLink}
              target="_blank"
              rel="noopener noreferrer"
              // Стили текстовой ссылки со стрелкой
              className="inline-flex items-center justify-center gap-2 text-text-light hover:text-[--color-accent-red] font-semibold transition-colors text-lg"
            >
              Обсудить автоматизацию ИИ
              <ArrowRight size={20} />
            </Link>
          </div>
          {/* Второстепенная ссылка */}
          <div>
            <Link
              href="/contact"
              // Стили второстепенной ссылки (с рамкой)
              className="inline-flex items-center justify-center gap-2 text-[--color-text-muted] hover:text-[--color-text-light] font-medium py-2 px-6 rounded-lg transition-colors duration-300 border border-[--color-text-muted]/50 hover:border-[--color-text-light]"
            >
              Другие способы связи
            </Link>
          </div>
          {/* --- КОНЕЦ ИЗМЕНЕНИЙ --- */}
        </div>
      )}
    </section>
  );
};

export default PageWrapper;
