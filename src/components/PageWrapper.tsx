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
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  title,
  className = "",
  showCta = false,
  telegramBotLink = "#",
}) => {
  return (
    // Убираем py-* отсюда, т.к. отступы будут у плашки заголовка и контента
    <section className={`container mx-auto px-4 ${className}`}>
      {/* Плашка для заголовка */}
      {title && (
        // Добавляем фон, отступы, скругление и т.д.
        // Используем меньшие вертикальные отступы (py-8 md:py-10), чем у основного контента
        <div className="bg-secondary-dark/60 backdrop-blur-sm py-8 md:py-10 rounded-lg border border-white/10 shadow-lg text-center mt-16 md:mt-24 mb-10 md:mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light">
            {title}
          </h1>
        </div>
      )}

      {/* Основной контент (без верхнего отступа, т.к. он задан нижним отступом плашки заголовка) */}
      {/* Добавляем нижний отступ */}
      <div className="pb-16 md:pb-24">
        <div className="prose prose-invert max-w-none lg:prose-lg mx-auto">
          {children}
        </div>
      </div>

      {/* CTA блок */}
      {showCta && (
        <div className="bg-secondary-dark/60 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-white/10 shadow-lg text-center my-16 md:my-20">
          {/* ... код CTA ... */}
          <h2 className="text-2xl md:text-3xl font-bold text-text-light mb-4 max-w-2xl mx-auto">
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-text-muted mb-8 max-w-lg mx-auto">
            Начните быстрое создание технического задания в нашем Telegram боте.
          </p>
          <Link
            href={telegramBotLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-base"
          >
            Создать ТЗ в Telegram
            <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </section>
  );
};

export default PageWrapper;
