"use client";

import React, { Suspense } from "react";
import PageWrapper from "@/components/PageWrapper";
import {
  MessageSquare,
  Users,
  Database,
  UserCheck,
  ShoppingCart,
  Bell,
  Share2,
} from "lucide-react";
import { ServiceNavigation } from "@/components/ServiceNavigation";

export default function AiBotsContent() {
  const telegramBotLink = "https://t.me/complexmedia_bot";
  const personalTelegramLink = "https://t.me/domosedoff";

  const technologies = [
    "Python",
    "Node.js",
    "LLM",
    "Langchain",
    "RAG",
    "Webhook",
  ];
  const platforms = [
    "Telegram",
    "WhatsApp",
    "ВКонтакте",
    "Avito",
    "Max",
    "Сайт (Виджет)",
  ];

  return (
    <PageWrapper
      title="Разработка ИИ Чат-ботов"
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
            Автоматизируйте коммуникацию с клиентами и повысьте эффективность
            бизнеса с помощью{" "}
            <span className="text-[--color-accent-red]">
              интеллектуальных ботов
            </span>
            .
          </p>
          <p className="text-xl md:text-2xl text-text-light font-medium leading-relaxed">
            Мы создаем ботов, которые понимают естественный язык, обучаются на
            ваших данных и решают реальные задачи 24/7.
          </p>
        </div>

        {/* Возможности */}
        <div>
          <div className="flex justify-center mb-8">
            <div className="bg-secondary-dark/70 backdrop-blur-sm px-10 py-4 rounded-2xl border border-white/10 shadow-lg">
              <h2 className="text-3xl font-bold text-text-light text-center m-0">
                Ключевые возможности
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard
              icon={MessageSquare}
              title="Поддержка 24/7"
              desc="Мгновенные ответы на частые вопросы клиентов в любое время суток без участия оператора."
            />
            <BenefitCard
              icon={Users}
              title="Сбор лидов"
              desc="Квалификация клиентов через диалог, сбор контактов и передача их в отдел продаж."
            />
            <BenefitCard
              icon={Database}
              title="Интеграция с CRM"
              desc="Автоматическое сохранение истории диалогов и данных клиента в вашу CRM-систему."
            />
            <BenefitCard
              icon={UserCheck}
              title="Персонализация"
              desc="Бот помнит историю общения и подстраивает ответы под конкретного пользователя."
            />
            <BenefitCard
              icon={ShoppingCart}
              title="Прием заказов"
              desc="Каталог товаров, корзина и оплата прямо внутри мессенджера."
            />
            <BenefitCard
              icon={Bell}
              title="Умные рассылки"
              desc="Сегментированные уведомления и напоминания, которые пользователи действительно читают."
            />
          </div>
        </div>

        {/* ИИ vs Обычный бот */}
        <div className="bg-secondary-dark/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg">
          <h3 className="text-2xl font-bold text-text-light mb-4">
            Почему ИИ-бот лучше обычного?
          </h3>
          <p className="text-text-muted text-lg leading-relaxed">
            В отличие от простых &quot;кнопочных&quot; ботов, ИИ-решения
            способны понимать запросы на естественном языке, поддерживать
            контекст диалога и генерировать осмысленные ответы. Это создает
            ощущение общения с живым сотрудником и значительно повышает
            лояльность клиентов.
          </p>
        </div>

        {/* Примеры и Стек */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-secondary-dark/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg">
            <h3 className="text-xl font-bold text-text-light mb-4">
              Примеры использования
            </h3>
            <ul className="space-y-3 text-text-muted">
              <li className="flex gap-3">
                <span className="text-[--color-accent-red]">•</span>Техподдержка
                и FAQ
              </li>
              <li className="flex gap-3">
                <span className="text-[--color-accent-red]">•</span>Бот-продавец
                и консультант
              </li>
              <li className="flex gap-3">
                <span className="text-[--color-accent-red]">•</span>HR-бот для
                онбординга
              </li>
              <li className="flex gap-3">
                <span className="text-[--color-accent-red]">•</span>Обучающие
                боты и тесты
              </li>
            </ul>
          </div>

          {/* Правая колонка: Платформы + Стек */}
          <div className="bg-secondary-dark/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg flex flex-col gap-8">
            {/* Блок Платформы */}
            <div>
              <h3 className="text-xl font-bold text-text-light mb-4 flex items-center gap-2">
                <Share2 size={24} className="text-[--color-accent-red]" />
                Платформы интеграции
              </h3>
              <p className="text-text-muted mb-4 text-sm">
                Мы внедряем ботов не только в Telegram, но и в другие популярные
                каналы коммуникации:
              </p>
              <div className="flex flex-wrap gap-2">
                {platforms.map((platform, index) => (
                  <span
                    key={index}
                    className="bg-[--color-accent-red]/10 text-[--color-accent-red] text-sm font-semibold px-3 py-1.5 rounded border border-[--color-accent-red]/20"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            {/* Разделитель */}
            <div className="h-px bg-white/10 w-full"></div>

            {/* Блок Стек */}
            <div>
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
