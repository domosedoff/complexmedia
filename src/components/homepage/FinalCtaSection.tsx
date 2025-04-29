// src/components/homepage/FinalCtaSection.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FinalCtaSectionProps {
  telegramBotLink: string;
}

const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  telegramBotLink,
}) => {
  return (
    // ВЕРНУЛИ ФОН И РАЗМЫТИЕ + ДОБАВИЛИ ВЕРХНИЙ ОТСТУП (mt-20 или mt-28)
    <section className="bg-secondary-dark/70 backdrop-blur-sm py-20 md:py-28 mt-20 md:mt-28">
      <div className="container mx-auto px-4 text-center">
        {/* ... остальной код секции ... */}
        <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-6 max-w-3xl mx-auto">
          Готовы начать проект или обсудить идею?
        </h2>
        <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto">
          Давайте создадим эффективное решение для ваших задач. Начните брифинг
          в Telegram или свяжитесь с нами удобным способом.
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
            Связаться с нами
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
