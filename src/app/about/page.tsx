// src/app/about/page.tsx
import React from "react";
import PageWrapper from "@/components/PageWrapper";
import { ShieldCheck, TrendingUp, Lightbulb, Handshake } from "lucide-react"; // Убрали неиспользуемые

interface ValueItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export default function AboutPage() {
  const telegramBotLink = "#"; // ЗАМЕНИТЕ

  const values: ValueItem[] = [
    {
      icon: Lightbulb,
      title: "Инновации",
      description:
        "Мы постоянно изучаем и внедряем новейшие технологии в AI и веб-разработке для создания передовых решений.",
    },
    {
      icon: ShieldCheck,
      title: "Качество",
      description:
        "Высокие стандарты кода, тщательное тестирование и внимание к деталям гарантируют надежность наших продуктов.",
    },
    {
      icon: Handshake,
      title: "Партнерство",
      description:
        "Мы строим прозрачные и доверительные отношения с клиентами, работая вместе для достижения общих целей.",
    },
    {
      icon: TrendingUp,
      title: "Результат",
      description:
        "Фокусируемся на решении конкретных бизнес-задач и достижении измеримых результатов для наших клиентов.",
    },
  ];

  return (
    <PageWrapper
      title="О Комплекс Медиа"
      showCta={true}
      telegramBotLink={telegramBotLink}
    >
      <div className="space-y-16 md:space-y-20">
        {/* Секция 1: Миссия и Кто мы */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          {/* Блок Миссия/Подход */}
          {/* ДОБАВЛЯЕМ ФОН, ОТСТУПЫ И ДР. СТИЛИ К ЭТОМУ DIV */}
          <div className="lg:col-span-2 bg-secondary-dark/60 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10 shadow-lg">
            {/* Применяем prose классы к внутренней обертке текста */}
            <div className="prose prose-invert lg:prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-semibold text-text-light !mt-0 !mb-4">
                Наша Миссия и Подход
              </h2>
              <p>
                {`Мы в "Комплекс Медиа" убеждены: ключ к успеху в современном мире — это `}
                <strong className="text-text-light">
                  эффективные коммуникации
                </strong>
                {`, усиленные интеллектуальными технологиями. Наша страсть — превращать сложные технологии в понятные и работающие инструменты для вашего бизнеса.`}
              </p>
              <p>
                {`Наша миссия — создавать цифровые решения (сайты, AI-боты, агенты), которые не просто решают текущие задачи, а открывают новые горизонты и возможности роста. Мы не просто пишем код — мы проектируем будущее ваших взаимодействий с клиентами.`}
              </p>
              <p>
                {`Мы объединяем глубокую `}
                <strong className="text-text-light">
                  экспертизу в веб-разработке и искусственном интеллекте
                </strong>
                {` с вашим видением, чтобы построить надежный мост между вами и вашей аудиторией, автоматизировать рутину и дать вам конкурентное преимущество.`}
              </p>
            </div>
          </div>

          {/* Блок Кто мы */}
          <div className="bg-secondary-dark/60 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-lg lg:sticky lg:top-28">
            <h3 className="text-xl font-semibold text-text-light mb-3">
              Кто мы?
            </h3>
            <div className="text-sm text-text-muted space-y-3">
              {/* !!! ЗАМЕНИТЕ ЭТОТ ТЕКСТ, ИСПОЛЬЗУЯ ШАБЛОННЫЕ СТРОКИ ИЛИ ' " !!! */}
              <div>{`"Комплекс Медиа" — это [опишите себя: например, 'команда увлеченных разработчиков', 'специалист по веб-технологиям и AI', 'ваш технологический партнер'].`}</div>
              <div>{`Мы специализируемся на создании [перечислите ключевое: 'высокопроизводительных сайтов', 'интеллектуальных чат-ботов', 'автономных AI-решений'].`}</div>
              <div>{`Наш опыт позволяет нам браться за проекты разной сложности и предлагать оптимальные решения.`}</div>
            </div>
          </div>
        </div>

        {/* Секция 2: Ценности */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-light mb-8 text-center">
            Наши Ценности
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-secondary-dark/40 p-6 rounded-lg border border-white/10"
              >
                <div className="text-[--color-accent-red] mb-3">
                  {/* @ts-expect-error TypeScript может не знать о пропсах size/strokeWidth для этого типа */}
                  <value.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-text-light mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
