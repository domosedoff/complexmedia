// src/components/homepage/FinalCtaSection.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FinalCtaSectionProps {
  personalTelegramLink: string;
}

const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
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
          <Link
            href={personalTelegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
          >
            Обсудить внедрение ИИ
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="mt-6">
          <a
            href="tel:+74951085316"
            className="inline-flex items-center justify-center text-[--color-text-light] hover:text-[--color-accent-red] font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            +7 (495) 108-53-16
          </a>
        </div>

        <div className="mt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-[--color-text-muted] hover:text-[--color-text-light] font-medium py-2 px-6 rounded-lg transition-colors duration-300 border border-[--color-text-muted]/50 hover:border-[--color-text-light]"
          >
            Другие способы связи
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
