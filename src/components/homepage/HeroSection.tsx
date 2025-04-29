// src/components/homepage/HeroSection.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  telegramBotLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ telegramBotLink }) => {
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
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href={telegramBotLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
          >
            Начать брифинг в Telegram
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-[--color-text-muted] hover:text-[--color-text-light] font-medium py-3 px-8 rounded-lg transition-colors duration-300 border border-[--color-text-muted]/50 hover:border-[--color-text-light]"
          >
            Другие способы связи
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
