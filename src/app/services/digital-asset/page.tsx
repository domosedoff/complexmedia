// src/app/services/digital-asset/page.tsx
"use client";

import React, { Suspense } from "react";
import PageWrapper from "@/components/PageWrapper";
import {
  BrainCircuit,
  ShieldCheck,
  Users,
  TrendingUp,
  Layers,
  Search,
} from "lucide-react";
import { ServiceNavigation } from "@/components/ServiceNavigation";

export default function DigitalAssetPage() {
  const telegramBotLink = "https://t.me/complexmedia_bot";
  const personalTelegramLink = "https://t.me/domosedoff";

  const technologies = [
    "Obsidian",
    "Markdown",
    "JSON",
    "RAG-Ready Architecture",
    "Knowledge Graph",
  ];

  return (
    <>
      <head>
        <title>Корпоративный Цифровой Актив | База Знаний для ИИ</title>
        <meta
          name="description"
          content="Разработка архитектуры корпоративной базы знаний. Превращаем хаос в структурированный цифровой актив, готовый к внедрению Искусственного Интеллекта."
        />
      </head>

      <PageWrapper
        title="Корпоративный Цифровой Актив"
        showCta={true}
        telegramBotLink={telegramBotLink}
        personalTelegramLink={personalTelegramLink}
      >
        <Suspense fallback={<div>Загрузка навигации...</div>}>
          <ServiceNavigation />
        </Suspense>

        <div className="space-y-12 md:space-y-20">
          {/* БЛОК 1: Введение */}
          <div className="bg-secondary-dark/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg">
            <p className="text-xl md:text-2xl text-text-light font-medium leading-relaxed mb-4">
              Превращаем разрозненные документы, чаты и знания в головах
              сотрудников в{" "}
              <span className="text-[--color-accent-red]">единую систему</span>.
            </p>
            <p className="text-xl md:text-2xl text-text-light font-medium leading-relaxed">
              Это не просто архив — это инженерная база, готовая к подключению
              Искусственного Интеллекта.
            </p>
          </div>

          {/* БЛОК 2: Проблема и Решение */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Проблема */}
            {/* Добавили /80 для прозрачности и backdrop-blur-sm */}
            <div className="p-6 rounded-xl border border-red-900/30 bg-[#1a0505]/70 backdrop-blur-sm shadow-lg">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚠️</span> Проблема: Хаос данных
              </h3>
              <p className="text-text-muted mb-4">
                Главный барьер для внедрения ИИ — некачественные данные. Если
                &quot;скормить&quot; нейросети старые регламенты и
                противоречивые переписки, вы получите{" "}
                <strong>непредсказуемого ассистента</strong>, который врет
                клиентам и сотрудникам.
              </p>
              <p className="text-sm text-red-300/80 italic">
                &quot;Мусор на входе — мусор на выходе.&quot;
              </p>
            </div>

            {/* Решение */}
            {/* Добавили /80 для прозрачности и backdrop-blur-sm */}
            <div className="p-6 rounded-xl border border-green-900/30 bg-[#051a05]/70 backdrop-blur-sm shadow-lg">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <span className="text-2xl">✅</span> Решение: Цифровой Актив
              </h3>
              <p className="text-text-muted mb-4">
                Мы создаем <strong>&quot;Единый источник правды&quot;</strong> —
                верифицированную, структурированную базу знаний. Она принадлежит
                компании, не зависит от конкретных людей и служит идеальным
                фундаментом для обучения ИИ.
              </p>
            </div>
          </div>

          {/* БЛОК 3: Что вы получаете */}
          <div>
            <h2 className="text-3xl font-bold text-text-light mb-8 text-center">
              Ценность для бизнеса
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BenefitCard
                icon={BrainCircuit}
                title="Фундамент для ИИ"
                desc="Структурированные данные (RAG), на которых нейросети работают точно и без галлюцинаций."
              />
              <BenefitCard
                icon={Users}
                title="Независимость от кадров"
                desc="Знания остаются в компании. Уход ключевого сотрудника больше не парализует работу отдела."
              />
              <BenefitCard
                icon={TrendingUp}
                title="Быстрый онбординг"
                desc="Новички обучаются по базе знаний за дни, а не месяцы, не отвлекая наставников от работы."
              />
              <BenefitCard
                icon={Layers}
                title="Масштабирование"
                desc="Описанные стандарты позволяют легко открывать филиалы или упаковать бизнес во франшизу."
              />
              <BenefitCard
                icon={Search}
                title="Прозрачность"
                desc="В процессе аудита мы выявляем «узкие горлышки», дублирование функций и хаос в процессах."
              />
              <BenefitCard
                icon={ShieldCheck}
                title="Безопасность"
                desc="Локальное хранение данных (Obsidian/Markdown). Полный контроль, никаких утечек через облака."
              />
            </div>
          </div>

          {/* БЛОК 4: Стратегия */}
          <div className="bg-secondary-dark/90 p-8 rounded-2xl border border-white/5 shadow-lg">
            <h2 className="text-3xl font-bold text-text-light mb-8">
              Архитектура системы
            </h2>
            <div className="space-y-6">
              <StrategyItem
                step="01"
                title="Ядро (Смыслы)"
                desc="Фиксируем миссию, Tone of Voice и бизнес-цели. ИИ должен понимать не только факты, но и контекст вашего бизнеса."
              />
              <StrategyItem
                step="02"
                title="Структура (Скелет)"
                desc="Описываем сущности бизнеса (Склады, Услуги, Роли) и жесткие связи между ними. Создаем 'Граф Знаний'."
              />
              <StrategyItem
                step="03"
                title="Регламенты (Процессы)"
                desc="Создаем четкие инструкции, связывающие людей и процессы. Убираем противоречия."
              />
              <StrategyItem
                step="04"
                title="Слой доступа (Интерфейс)"
                desc="Размечаем данные мета-тегами так, чтобы их мгновенно находили и люди (через поиск), и алгоритмы ИИ."
              />
            </div>
          </div>

          {/* БЛОК 5: Результат и Стек */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-text-light mb-4">
                Итоговый продукт
              </h3>
              <p className="text-text-muted text-lg">
                Вы получаете автономный цифровой актив: реестр сущностей, книгу
                процессов, набор Q&A для обучения нейросетей и визуальную карту
                вашего бизнеса. Это актив, который работает на капитализацию
                вашей компании.
              </p>
            </div>
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
      </PageWrapper>
    </>
  );
}

// Вспомогательные компоненты

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
    <div className="bg-secondary-dark/90 p-6 rounded-xl border border-white/5 hover:border-[--color-accent-red]/50 transition-colors group shadow-lg">
      <div className="mb-4 text-[--color-accent-red] group-hover:scale-110 transition-transform duration-300">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h4 className="text-lg font-semibold text-text-light mb-2">{title}</h4>
      <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
    </div>
  );
}

function StrategyItem({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:items-start">
      <div className="text-3xl font-bold text-[--color-accent-red]/20 md:w-16 flex-shrink-0">
        {step}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-text-light mb-1">{title}</h4>
        <p className="text-text-muted">{desc}</p>
      </div>
    </div>
  );
}
