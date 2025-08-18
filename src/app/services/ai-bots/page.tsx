// src/app/services/ai-bots/page.tsx
"use client"; // Обязательно

import React from "react";
import PageWrapper from "@/components/PageWrapper";
import { CheckCircle } from "lucide-react";
import { ServiceNavigation } from "@/components/ServiceNavigation"; // Импортируем

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Разработка ИИ Telegram ботов | Комплекс Медиа",
  description:
    "Создание и разработка умных Telegram ботов на искусственном интеллекте (AI) для автоматизации поддержки, продаж и сбора лидов. Заказать AI чат-бота для бизнеса.",
};

export default function AiBotsPage() {
  const telegramBotLink = "#"; // ЗАМЕНИТЕ
  const features = [
    "Автоматизация ответов на частые вопросы 24/7",
    "Сбор лидов и квалификация клиентов",
    "Интеграция с CRM и другими системами",
    "Персонализированное общение с пользователями",
    "Обработка заказов и прием платежей (при необходимости)",
    "Умные рассылки и уведомления",
    "Аналитика взаимодействий с пользователями",
  ];
  const technologies = [
    "Python (aiogram/telebot)",
    "Node.js (Telegraf)",
    "OpenAI API (ChatGPT)",
    "Langchain",
    "Векторные базы данных",
    "Webhook/Polling",
  ];

  return (
    <PageWrapper
      title="Разработка AI Telegram Ботов"
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
            Автоматизируйте коммуникацию с клиентами и повысьте эффективность
            вашего бизнеса с помощью интеллектуальных Telegram ботов. Мы создаем
            ботов, которые понимают естественный язык, обучаются и решают
            реальные задачи.
          </p>

          <h2>Ключевые возможности ботов</h2>
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

          <h2>Почему AI-бот лучше обычного?</h2>
          <p>
            В отличие от простых ботов с кнопками, AI-боты способны понимать
            запросы пользователей на естественном языке, поддерживать контекст
            диалога, генерировать осмысленные ответы и даже выполнять сложные
            действия на основе полученной информации. Это обеспечивает более
            гибкое и человекоподобное взаимодействие.
          </p>

          <h2>Примеры использования</h2>
          <ul>
            <li>
              Бот для поддержки клиентов (ответы на вопросы, решение проблем).
            </li>
            <li>
              Бот для продаж (консультация по товарам, помощь в оформлении
              заказа).
            </li>
            <li>
              Бот для HR (первичный скрининг кандидатов, ответы на вопросы
              сотрудников).
            </li>
            <li>
              Бот для образовательных проектов (проверка знаний, предоставление
              материалов).
            </li>
            <li>Информационный бот с доступом к базе знаний.</li>
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
