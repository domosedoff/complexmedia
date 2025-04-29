// src/app/services/web-development/page.tsx
"use client"; // Обязательно для использования usePathname в ServiceNavigation

import React from "react";
import PageWrapper from "@/components/PageWrapper";
import { CheckCircle } from "lucide-react";
import { ServiceNavigation } from "@/components/ServiceNavigation"; // Импортируем компонент навигации

export default function WebDevelopmentPage() {
  const telegramBotLink = "#"; // ЗАМЕНИТЕ на вашу ссылку TG бота

  // Список ключевых особенностей/преимуществ
  const features = [
    "Современный дизайн (UI/UX)",
    "Адаптивность под все устройства",
    "Высокая скорость загрузки (Core Web Vitals)",
    "Базовая SEO-оптимизация",
    "Надежный и масштабируемый код",
    "Интеграция с необходимыми сервисами",
    "Удобная система управления (CMS, если требуется)",
  ];

  // Технологии (пример)
  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js (для бэкенда)",
    "PostgreSQL/MongoDB",
  ];

  return (
    <PageWrapper
      title="Разработка Сайтов"
      showCta={true}
      telegramBotLink={telegramBotLink}
    >
      {/* --- Добавляем навигацию по услугам --- */}
      {/* Убедитесь, что создали файл src/components/ServiceNavigation.tsx */}
      <ServiceNavigation />
      {/* --- Конец навигации --- */}

      {/* Обертка с фоном для основного контента */}
      <div className="bg-secondary-dark/60 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10 shadow-lg">
        {/* Внутренний div с prose */}
        <div className="prose prose-invert lg:prose-lg max-w-none mx-auto">
          <p className="lead text-xl text-text-muted !mt-0">
            Создаем не просто сайты, а эффективные инструменты для вашего
            бизнеса. От привлекательных лендингов и корпоративных порталов до
            сложных веб-приложений – мы реализуем проекты, которые работают на
            вас.
          </p>

          <h2>Что вы получаете?</h2>
          <ul className="list-none p-0 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-[--color-accent-red] mt-1 flex-shrink-0"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h2>Кому подходит эта услуга?</h2>
          <ul>
            <li>
              Стартапам, которым нужен быстрый запуск MVP или посадочной
              страницы.
            </li>
            <li>
              Малому и среднему бизнесу для создания корпоративного сайта или
              интернет-магазина.
            </li>
            <li>
              Компаниям, нуждающимся в сложных веб-приложениях, личных кабинетах
              или интеграциях.
            </li>
            <li>Всем, кто ценит качество, современный дизайн и надежность.</li>
          </ul>

          <h2>Наш подход к разработке сайтов</h2>
          <p>
            Мы начинаем с глубокого погружения в ваши цели и задачи. На основе
            этого разрабатываем структуру, дизайн (если требуется) и функционал.
            Используя передовые технологии, такие как Next.js, мы обеспечиваем
            высокую производительность и отличный пользовательский опыт. Весь
            процесс разработки прозрачен, и вы всегда в курсе текущего статуса.
          </p>

          <h2>Технологии, которые мы используем</h2>
          {/* Теги технологий теперь вне prose */}
        </div>
        {/* Теги технологий вне prose, но внутри плашки */}
        <div className="flex flex-wrap gap-2 mt-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-primary-dark text-text-muted text-xs font-medium px-2.5 py-0.5 rounded border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {/* CTA из PageWrapper будет ниже */}
    </PageWrapper>
  );
}
