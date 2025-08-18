// src/components/homepage/FinalCtaSection.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Пропсы для компонента, принимающие обе ссылки
interface FinalCtaSectionProps {
  telegramBotLink: string;
  personalTelegramLink: string;
}

const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  telegramBotLink,
  personalTelegramLink,
}) => {
  return (
    <section className="bg-secondary-dark/70 backdrop-blur-sm py-20 md:py-28 mt-20 md:mt-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-6 max-w-3xl mx-auto">
          Готовы начать проект или обсудить идею?
        </h2>
        <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto">
          Выберите наиболее подходящий способ для вашего запроса. Мы всегда на
          связи и готовы помочь.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Кнопка 1: Создать ТЗ на сайт */}
          <Link
            href={telegramBotLink}
            target="_blank"
            rel="noopener noreferrer"
            // Стили основной красной кнопки
            className="inline-flex items-center justify-center gap-2 bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
          >
            Создать ТЗ на сайт
            <ArrowRight size={20} />
          </Link>

          {/* Кнопка 2: Обсудить автоматизацию ИИ */}
          <Link
            href={personalTelegramLink}
            target="_blank"
            rel="noopener noreferrer"
            // Стили основной красной кнопки (такие же, как у первой)
            className="inline-flex items-center justify-center gap-2 bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
          >
            Обсудить автоматизацию ИИ
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* --- ДОБАВЛЕНА ССЫЛКА "ДРУГИЕ СПОСОБЫ СВЯЗИ" --- */}
        <div className="mt-6">
          {" "}
          {/* Добавляем отступ сверху */}
          <Link
            href="/contact"
            // Стили второстепенной ссылки (как было раньше)
            className="inline-flex items-center justify-center gap-2 text-[--color-text-muted] hover:text-[--color-text-light] font-medium py-2 px-6 rounded-lg transition-colors duration-300 border border-[--color-text-muted]/50 hover:border-[--color-text-light]"
          >
            Другие способы связи
          </Link>
        </div>
        {/* --- КОНЕЦ ИЗМЕНЕНИЙ --- */}
      </div>
    </section>
  );
};

export default FinalCtaSection;
