// src/components/ServiceNavigation.tsx
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Хук для определения текущего пути

interface ServiceLink {
  href: string;
  title: string;
}

const services: ServiceLink[] = [
  { href: "/services/web-development", title: "Сайты" },
  { href: "/services/ai-bots", title: "AI Боты" },
  { href: "/services/ai-agents", title: "AI Агенты" },
  { href: "/services/digital-asset", title: "Цифровой Актив" },
];

export const ServiceNavigation = () => {
  const pathname = usePathname(); // Получаем текущий URL

  return (
    // Обертка с фоном, отступами и центрированием
    <div className="bg-secondary-dark/60 backdrop-blur-sm rounded-lg border border-white/10 shadow-lg p-4 mb-8 md:mb-10">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        <span className="text-sm font-medium text-text-muted mr-2 self-center hidden sm:inline">
          Другие услуги:
        </span>
        {services.map((service) => {
          const isActive = pathname === service.href; // Проверяем, активна ли ссылка
          return (
            <Link
              key={service.href}
              href={service.href}
              // Стили для активной и неактивной ссылки
              className={`text-sm font-medium px-3 py-1 rounded transition-colors duration-200 ${
                isActive
                  ? "bg-[--color-accent-red] text-white cursor-default pointer-events-none" // Стиль активной ссылки
                  : "text-text-muted hover:text-text-light hover:bg-primary-dark/50" // Стиль неактивной ссылки
              }`}
              // Отключаем клик для активной ссылки
              aria-current={isActive ? "page" : undefined}
              onClick={(e) => isActive && e.preventDefault()}
            >
              {service.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
