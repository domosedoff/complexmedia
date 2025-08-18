// src/components/homepage/HeroSection.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Пропсы остаются такими же: нужны обе ссылки
interface HeroSectionProps {
  telegramBotLink: string;
  personalTelegramLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  telegramBotLink,
  personalTelegramLink,
}) => {
  return (
    <section className="h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center text-center overflow-hidden px-4 bg-secondary-dark/70 backdrop-blur-sm">
      <div className="container mx-auto z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-4 leading-tight">
          Сайты, TG-Боты и AI-Агенты – Ваши{" "}
          <span className="text-[--color-accent-red]">
            Эффективные Коммуникации
          </span>{" "}
          в ЦИФРОВОМ МИРЕ.
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-8">
          Превращаем технологии в результат. Автоматизируйте рутину, привлекайте
          клиентов и общайтесь эффективно с помощью наших сайтов, умных ботов и
          автономных AI-агентов. Начните ваш проект прямо сейчас!
        </p>
        {/* --- ИЗМЕНЕННЫЙ БЛОК КНОПОК --- */}
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

export default HeroSection;
