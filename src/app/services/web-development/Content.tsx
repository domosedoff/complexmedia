"use client";

import React, { Suspense } from "react";
import PageWrapper from "@/components/PageWrapper";
import { Layout, Smartphone, Zap, Search, Code, Layers } from "lucide-react";
import { ServiceNavigation } from "@/components/ServiceNavigation";

export default function WebDevelopmentContent() {
  const telegramBotLink = "https://t.me/complexmedia_bot";
  const personalTelegramLink = "https://t.me/domosedoff";

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL/MongoDB",
  ];

  return (
    <PageWrapper
      title="Разработка Сайтов"
      showCta={true}
      telegramBotLink={telegramBotLink}
      personalTelegramLink={personalTelegramLink}
    >
      <Suspense fallback={<div>Загрузка навигации...</div>}>
        <ServiceNavigation />
      </Suspense>

      <div className="space-y-12 md:space-y-20">
        {/* Введение */}
        <div className="bg-secondary-dark/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg">
          <p className="text-xl md:text-2xl text-text-light font-medium leading-relaxed mb-4">
            Создаем не просто сайты, а{" "}
            <span className="text-[--color-accent-red]">
              эффективные инструменты
            </span>{" "}
            для вашего бизнеса.
          </p>
          <p className="text-xl md:text-2xl text-text-light font-medium leading-relaxed">
            От привлекательных лендингов и корпоративных порталов до сложных
            веб-приложений – мы реализуем проекты, которые работают на вас.
          </p>
        </div>

        {/* Преимущества */}
        <div>
          <div className="flex justify-center mb-8">
            <div className="bg-secondary-dark/70 backdrop-blur-sm px-10 py-4 rounded-2xl border border-white/10 shadow-lg">
              <h2 className="text-3xl font-bold text-text-light text-center m-0">
                Что вы получаете?
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard
              icon={Layout}
              title="Современный UI/UX"
              desc="Продуманный дизайн, который удобен пользователям и конвертирует посетителей в клиентов."
            />
            <BenefitCard
              icon={Smartphone}
              title="Адаптивность"
              desc="Идеальное отображение на всех устройствах: от больших мониторов до смартфонов."
            />
            <BenefitCard
              icon={Zap}
              title="Скорость (Core Web Vitals)"
              desc="Молниеносная загрузка благодаря Next.js. Это критически важно для SEO и удержания пользователей."
            />
            <BenefitCard
              icon={Search}
              title="SEO-оптимизация"
              desc="Правильная структура, мета-теги и семантика для лучшего ранжирования в поисковиках."
            />
            <BenefitCard
              icon={Code}
              title="Чистый код"
              desc="Надежная, масштабируемая архитектура, которую легко поддерживать и развивать."
            />
            <BenefitCard
              icon={Layers}
              title="Интеграции"
              desc="Подключение CRM, платежных систем, аналитики и любых сторонних сервисов по API."
            />
          </div>
        </div>

        {/* Кому подходит и Подход */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-secondary-dark/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg">
            <h3 className="text-2xl font-bold text-text-light mb-6">
              Кому подходит?
            </h3>
            <ul className="space-y-4 text-text-muted">
              <li className="flex gap-3">
                <span className="text-[--color-accent-red]">•</span>Стартапам
                для быстрого запуска MVP.
              </li>
              <li className="flex gap-3">
                <span className="text-[--color-accent-red]">•</span>Малому и
                среднему бизнесу для продаж.
              </li>
              <li className="flex gap-3">
                <span className="text-[--color-accent-red]">•</span>Компаниям,
                которым нужны сложные веб-сервисы.
              </li>
              <li className="flex gap-3">
                <span className="text-[--color-accent-red]">•</span>Всем, кто
                ценит качество и скорость.
              </li>
            </ul>
          </div>
          <div className="bg-secondary-dark/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg">
            <h3 className="text-2xl font-bold text-text-light mb-6">
              Наш подход
            </h3>
            <p className="text-text-muted leading-relaxed">
              Мы начинаем с глубокого погружения в ваши цели. На основе этого
              разрабатываем структуру, дизайн и функционал. Используя передовые
              технологии (Next.js), мы обеспечиваем высокую производительность.
              Весь процесс прозрачен, вы всегда в курсе статуса.
            </p>
          </div>
        </div>

        {/* Стек технологий */}
        <div className="bg-secondary-dark/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg">
          <h3 className="text-xl font-bold text-text-light mb-4">
            Технологический стек
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-primary-dark text-text-muted text-xs font-medium px-3 py-1.5 rounded border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

function BenefitCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-secondary-dark/70 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-[--color-accent-red]/50 transition-colors group shadow-lg">
      <div className="mb-4 text-[--color-accent-red] group-hover:scale-110 transition-transform duration-300">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h4 className="text-lg font-semibold text-text-light mb-2">{title}</h4>
      <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
    </div>
  );
}
