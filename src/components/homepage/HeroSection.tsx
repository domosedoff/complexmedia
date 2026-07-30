// src/components/homepage/HeroSection.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  personalTelegramLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  personalTelegramLink,
}) => {
  return (
    <section className="h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center text-center overflow-hidden px-4 bg-secondary-dark/70 backdrop-blur-sm">
      <div className="container mx-auto z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-4 leading-tight">
          Внедрение ИИ в бизнес и{" "}
          <span className="text-[--color-accent-red]">
            автоматизация процессов
          </span>
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-8">
          Разрабатываем ИИ-чат-ботов, ИИ-агентов, личных помощников и
          корпоративные базы знаний. Автоматизируем продажи, поддержку,
          работу с документами и другие рутинные процессы.
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
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-[--color-text-muted] hover:text-[--color-text-light] font-medium py-2 px-6 rounded-lg transition-colors duration-300 border border-[--color-text-muted]/50 hover:border-[--color-text-light]"
          >
            Другие способы связи
          </Link>
        </div>
        <div className="mt-4">
          <Link
            href="/articles/ai-implementation-business"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-[--color-accent-red]"
          >
            Как проходит внедрение ИИ
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
