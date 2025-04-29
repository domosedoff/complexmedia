// src/components/homepage/ServicesSection.tsx
import React from "react";
import Link from "next/link";
import { LucideProps } from "lucide-react";

interface Service {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
  link: string;
}

interface ServicesSectionProps {
  services: Service[];
  telegramBotLink: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  telegramBotLink,
}) => {
  // Базовые стили для обеих кнопок
  const baseButtonStyles =
    "inline-block text-sm font-medium py-2 px-5 rounded border transition-all duration-200 ease-in-out transform"; // Добавили transform

  return (
    <section id="services" className="container mx-auto px-4 py-20 md:py-28">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-text-light mb-12 md:mb-16">
        Наши Услуги
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-secondary-dark/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/10 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03] group"
          >
            <div className="mb-4 text-[--color-accent-red] transition-transform duration-300 group-hover:scale-110">
              <service.icon size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-text-light mb-3">
              {service.title}
            </h3>
            <p className="text-text-muted mb-6 flex-grow">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mt-auto pt-4 border-t border-white/5">
              {/* Кнопка Подробнее (Заметный фон и белый текст при наведении) */}
              <Link
                href={service.link}
                className={`${baseButtonStyles}
                           text-[--color-text-muted] border-[--color-text-muted]/30 bg-transparent
                           hover:bg-[--color-accent-red]/50 {/* <--- Фон 50% красный */}
                           hover:border-[--color-accent-red]/70 {/* <--- Рамка 70% красная */}
                           hover:text-white {/* <--- Текст становится БЕЛЫМ */}
                           hover:shadow-sm hover:-translate-y-px
                          `}
              >
                Подробнее
              </Link>

              {/* Кнопка Создать ТЗ (Добавлена яркость при наведении) */}
              <Link
                href={telegramBotLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseButtonStyles}
                           text-white border-[--color-accent-red] bg-[--color-accent-red] shadow-sm
                           hover:bg-[--color-accent-red-hover] hover:border-[--color-accent-red-hover] hover:shadow-lg hover:-translate-y-px
                           hover:brightness-110 {/* <--- Добавили яркость при наведении */}
                          `}
              >
                Создать ТЗ
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
