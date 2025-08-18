// src/app/services/ai-agents/page.tsx
"use client"; // Обязательно

import React from "react";
import PageWrapper from "@/components/PageWrapper";
import { CheckCircle } from "lucide-react";
import { ServiceNavigation } from "@/components/ServiceNavigation"; // Импортируем

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Разработка AI агентов | Комплекс Медиа",
  description:
    "Проектирование и разработка автономных AI агентов для анализа данных, автоматизации сложных бизнес-процессов и создания интеллектуальных ассистентов.",
};

export default function AiAgentsPage() {
  const telegramBotLink = "#"; // ЗАМЕНИТЕ
  const features = [
    "Автономное выполнение многошаговых задач",
    "Анализ больших объемов данных и генерация отчетов",
    "Взаимодействие с внешними API и сервисами",
    "Способность к самообучению и адаптации (в перспективе)",
    "Персональные ассистенты для сотрудников",
    "Мониторинг и реагирование на события",
    "Создание кастомных рабочих процессов",
  ];
  const technologies = [
    "Python",
    "Langchain (Agents)",
    "LLM (GPT-4, Claude, etc.)",
    "Векторные базы данных",
    "API интеграции",
    "Инструменты планирования задач",
  ];

  return (
    <PageWrapper
      title="Разработка AI Агентов"
      showCta={true}
      telegramBotLink={telegramBotLink}
    >
      {/* --- Навигация по услугам --- */}
      <ServiceNavigation />
      {/* --- Конец навигации --- */}

      {/* Обертка с фоном */}
      <div className="bg-secondary-dark/60 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10 shadow-lg">
        {/* Внутренний div с prose */}
        <div className="prose prose-invert lg:prose-lg max-w-none mx-auto">
          <p className="lead text-xl text-text-muted !mt-0">
            Выйдите на новый уровень автоматизации с помощью автономных AI
            агентов. Мы проектируем интеллектуальные системы, способные
            самостоятельно планировать, выполнять и контролировать сложные
            задачи, освобождая ваши ресурсы.
          </p>

          <h2>Что умеют AI агенты?</h2>
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

          <h2>Отличие от чат-ботов</h2>
          <p>
            Если чат-боты в основном реагируют на запросы пользователя в рамках
            диалога, то AI агенты обладают большей автономией. Они могут сами
            инициировать действия, использовать различные инструменты (поиск в
            интернете, вызов API, работа с файлами), строить план для достижения
            поставленной цели и выполнять его без постоянного контроля человека.
          </p>

          <h2>Сферы применения</h2>
          <ul>
            <li>
              Автоматизация маркетинговых исследований и анализа конкурентов.
            </li>
            <li>Создание персонализированных планов обучения или развития.</li>
            <li>Мониторинг упоминаний бренда и анализ тональности.</li>
            <li>Автоматизация сложных процессов документооборота.</li>
            <li>Проактивная поддержка клиентов и управление инцидентами.</li>
            <li>Управление проектами и ресурсами.</li>
          </ul>

          <h2>Технологии</h2>
        </div>
        {/* Теги технологий */}
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
    </PageWrapper>
  );
}
