"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import {
  ArrowRight,
  Bot,
  BarChart3,
  Globe,
  Brain,
  UserCog,
  Workflow,
} from "lucide-react";
import { ServiceNavigation } from "@/components/ServiceNavigation";

export default function AiAgentsContent() {
  const personalTelegramLink = "https://t.me/domosedoff";

  const technologies = [
    "Python",
    "Langchain",
    "RAG",
    "LLM",
    "Vector DB",
    "API Integrations",
  ];

  return (
    <PageWrapper
      title="Разработка ИИ-агентов для бизнеса"
      showCta={true}
      personalTelegramLink={personalTelegramLink}
      ctaText="Заказать ИИ-агента"
    >
      <Suspense fallback={<div>Загрузка навигации...</div>}>
        <ServiceNavigation />
      </Suspense>

      <div className="space-y-12 md:space-y-20">
        {/* Введение */}
        <div className="bg-secondary-dark/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg">
          <p className="text-xl md:text-2xl text-text-light font-medium leading-relaxed mb-4">
            Выйдите на новый уровень автоматизации с помощью{" "}
            <span className="text-[--color-accent-red]">
              автономных ИИ агентов
            </span>
            .
          </p>
          <p className="text-xl md:text-2xl text-text-light font-medium leading-relaxed">
            Мы проектируем системы, способные самостоятельно планировать,
            выполнять и контролировать сложные задачи, освобождая ваши ресурсы
            для стратегии.
          </p>
        </div>

        {/* Возможности */}
        <div>
          <div className="flex justify-center mb-8">
            <div className="bg-secondary-dark/70 backdrop-blur-sm px-10 py-4 rounded-2xl border border-white/10 shadow-lg">
              <h2 className="text-3xl font-bold text-text-light text-center m-0">
                Что умеют ИИ агенты?
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard
              icon={Bot}
              title="Автономность"
              desc="Выполнение многошаговых задач без постоянного контроля человека."
            />
            <BenefitCard
              icon={BarChart3}
              title="Аналитика"
              desc="Сбор и анализ больших объемов данных, генерация отчетов и инсайтов."
            />
            <BenefitCard
              icon={Globe}
              title="Работа с внешним миром"
              desc="Поиск информации в интернете, взаимодействие с API и сторонними сервисами."
            />
            <BenefitCard
              icon={Brain}
              title="Планирование"
              desc="Способность разбивать сложную цель на подзадачи и последовательно их решать."
            />
            <BenefitCard
              icon={UserCog}
              title="Персональные ассистенты"
              desc="Цифровые помощники для сотрудников, берущие на себя рутину."
            />
            <BenefitCard
              icon={Workflow}
              title="Кастомные процессы"
              desc="Автоматизация уникальных бизнес-процессов любой сложности."
            />
          </div>
        </div>

        <div className="grid gap-8 rounded-2xl border border-[--color-accent-red]/30 bg-secondary-dark/70 p-8 shadow-lg lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="mb-4 text-[--color-accent-red]">
              <UserCog size={36} strokeWidth={1.5} />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-text-light">
              Личный ИИ-помощник руководителя
            </h3>
            <p className="leading-relaxed text-text-muted">
              Получает задачи текстом или голосом, подключается к рабочим
              инструментам компании и берёт на себя повседневную координацию.
              Решения и чувствительные действия остаются под контролем
              руководителя.
            </p>
            <Link
              href="/services/executive-ai-assistant"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-text-light transition-colors hover:text-[--color-accent-red]"
            >
              Подробнее об ИИ-помощнике
              <ArrowRight size={18} />
            </Link>
          </div>
          <ul className="grid gap-3 text-sm text-text-muted sm:grid-cols-2">
            {[
              "Документы, таблицы, сводки и отчёты",
              "Календарь, задачи и итоги совещаний",
              "Разбор почты и черновики ответов",
              "Поиск информации и сравнение предложений",
              "Контроль CRM, сделок и следующих шагов",
              "Поиск по корпоративной базе знаний",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-white/5 bg-primary-dark/40 p-3"
              >
                <span className="text-[--color-accent-red]">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Отличие от чат-ботов */}
        <div className="bg-secondary-dark/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg">
          <h3 className="text-2xl font-bold text-text-light mb-4">
            Чем агент отличается от бота?
          </h3>
          <p className="text-text-muted text-lg leading-relaxed">
            Чат-бот реактивен: он ждет вашего вопроса и отвечает на него.{" "}
            <strong>ИИ Агент проактивен</strong>: получив цель (например,
            &quot;проанализируй конкурентов&quot;), он сам составит план, найдет
            информацию, структурирует её и выдаст готовый результат. Это не
            просто интерфейс, это цифровой сотрудник.
          </p>
          <Link
            href="/articles/ai-agent-vs-chatbot"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-text-light transition-colors hover:text-[--color-accent-red]"
          >
            Подробное сравнение ИИ-агента и чат-бота
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Сферы применения и Стек */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-secondary-dark/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg">
            <h3 className="text-xl font-bold text-text-light mb-4">
              Сферы применения
            </h3>
            <ul className="space-y-3 text-text-muted">
              <li className="flex gap-3">
                <span className="text-[--color-accent-red]">•</span>
                Маркетинговые исследования
              </li>
              <li className="flex gap-3">
                <span className="text-[--color-accent-red]">•</span>Мониторинг
                бренда и репутации
              </li>
              <li className="flex gap-3">
                <span className="text-[--color-accent-red]">•</span>
                Автоматизация документооборота
              </li>
              <li className="flex gap-3">
                <span className="text-[--color-accent-red]">•</span>Управление
                проектами
              </li>
            </ul>
          </div>
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
