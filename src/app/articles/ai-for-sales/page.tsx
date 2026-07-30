import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Database,
  Route,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { createPageMetadata } from "@/seo";

export const metadata = createPageMetadata({
  title: "ИИ для отдела продаж: лиды, CRM и контроль сделок",
  description:
    "Как внедрить ИИ в отдел продаж: квалификация лидов, подготовка КП, заполнение CRM, контроль следующих шагов и измеримые KPI пилота.",
  path: "/articles/ai-for-sales",
  type: "article",
});

const tasks = [
  {
    icon: Bot,
    title: "Квалификация обращений",
    text: "ИИ уточняет задачу, бюджет, сроки и критерии выбора, отвечает на типовые вопросы и передаёт менеджеру структурированную заявку.",
  },
  {
    icon: Database,
    title: "Работа с CRM",
    text: "Создаёт и дополняет карточки, сохраняет договорённости, обновляет этап сделки и ставит следующий шаг.",
  },
  {
    icon: Route,
    title: "Контроль воронки",
    text: "Находит сделки без активности, просроченные задачи и обращения без ответа, чтобы менеджер вовремя вернулся к клиенту.",
  },
  {
    icon: BarChart3,
    title: "Подготовка материалов",
    text: "Собирает черновики писем и коммерческих предложений по данным клиента, каталогу, ценам и правилам компании.",
  },
];

const process = [
  [
    "1. Получение обращения",
    "Заявка поступает с сайта, почты, телефонии или мессенджера и связывается с клиентом в CRM.",
  ],
  [
    "2. Уточнение потребности",
    "ИИ задаёт согласованные вопросы, извлекает важные данные из переписки и определяет приоритет обращения.",
  ],
  [
    "3. Подготовка следующего шага",
    "Менеджер получает краткую сводку, рекомендуемое действие и при необходимости черновик ответа или КП.",
  ],
  [
    "4. Фиксация в CRM",
    "Результат общения, статус сделки, задача и срок сохраняются без повторного ручного ввода.",
  ],
  [
    "5. Контроль",
    "Система напоминает о зависших сделках и формирует руководителю сводку по причинам задержек и отказов.",
  ],
  [
    "6. Улучшение",
    "После пилота сценарии корректируются по фактическим диалогам, ошибкам и показателям воронки.",
  ],
];

const faq = [
  {
    question: "Заменит ли ИИ менеджеров по продажам?",
    answer:
      "Нет. ИИ снимает повторяющиеся операции и готовит следующий шаг, а переговоры, нестандартные условия и важные решения остаются у сотрудника.",
  },
  {
    question: "Можно ли подключить ИИ к существующей CRM?",
    answer:
      "Да, если CRM предоставляет API или другой безопасный способ интеграции. Конкретный набор действий определяется после проверки системы и прав доступа.",
  },
  {
    question: "С какого процесса лучше начать?",
    answer:
      "Обычно с квалификации входящих обращений, заполнения CRM или контроля следующих шагов — там проще зафиксировать исходные показатели и измерить эффект.",
  },
  {
    question: "Как оценивается результат пилота?",
    answer:
      "Сравниваются скорость первого ответа, полнота CRM, доля обращений без следующего шага, время подготовки КП и конверсия между выбранными этапами.",
  },
];

export default function AiForSalesArticle() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "ИИ для отдела продаж: квалификация лидов, CRM и контроль сделок",
        description:
          "Практическое руководство по внедрению ИИ в продажи: сценарии, интеграции, этапы пилота и показатели результата.",
        datePublished: "2026-07-30",
        dateModified: "2026-07-30",
        inLanguage: "ru-RU",
        mainEntityOfPage: "https://complexmedia.ru/articles/ai-for-sales",
        author: {
          "@type": "Organization",
          name: "Комплекс Медиа",
          url: "https://complexmedia.ru",
        },
        publisher: {
          "@type": "Organization",
          name: "Комплекс Медиа",
          url: "https://complexmedia.ru",
          logo: {
            "@type": "ImageObject",
            url: "https://complexmedia.ru/logo_01.png",
          },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: "https://complexmedia.ru",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "ИИ для отдела продаж",
            item: "https://complexmedia.ru/articles/ai-for-sales",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageWrapper title="ИИ для отдела продаж: квалификация лидов, CRM и контроль сделок">
        <article className="mx-auto max-w-5xl space-y-12 rounded-3xl bg-primary-dark/95 p-4 md:space-y-16 md:p-8">
          <header className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-7 shadow-lg md:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
              Практическое руководство
            </p>
            <p className="text-xl font-medium leading-relaxed text-text-light md:text-2xl">
              ИИ помогает отделу продаж быстрее обрабатывать обращения,
              поддерживать порядок в CRM и не терять следующие шаги. Начинать
              лучше с одного измеримого сценария, а важные действия оставить
              на подтверждении менеджера.
            </p>
          </header>

          <nav
            aria-label="Содержание статьи"
            className="rounded-2xl border border-white/10 bg-secondary-dark/60 p-7"
          >
            <h2 className="mb-4 text-xl font-bold text-text-light">
              Содержание
            </h2>
            <div className="grid gap-3 text-sm md:grid-cols-2">
              {[
                ["#tasks", "Что автоматизирует ИИ"],
                ["#process", "Как работает процесс"],
                ["#roles", "Какие решения используются"],
                ["#data", "Данные и интеграции"],
                ["#metrics", "KPI пилота"],
                ["#faq", "Вопросы и ответы"],
              ].map(([href, title]) => (
                <a
                  key={href}
                  href={href}
                  className="text-text-muted transition-colors hover:text-[--color-accent-red]"
                >
                  {title}
                </a>
              ))}
            </div>
          </nav>

          <section id="tasks">
            <h2 className="mb-7 text-2xl font-bold text-text-light md:text-3xl">
              Что ИИ может автоматизировать в отделе продаж
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {tasks.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-secondary-dark/60 p-6"
                >
                  <Icon
                    size={28}
                    className="mb-4 text-[--color-accent-red]"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-text-light">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="process">
            <h2 className="mb-7 text-2xl font-bold text-text-light md:text-3xl">
              Как выглядит процесс от заявки до контроля сделки
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {process.map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-secondary-dark/60 p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold text-text-light">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="roles">
            <h2 className="mb-6 text-2xl font-bold text-text-light md:text-3xl">
              ИИ-бот, ИИ-агент и база знаний решают разные задачи
            </h2>
            <div className="space-y-4 text-text-muted">
              <p>
                <Link
                  href="/services/ai-bots"
                  className="font-semibold text-text-light hover:text-[--color-accent-red]"
                >
                  ИИ-чат-бот
                </Link>{" "}
                ведёт диалог с клиентом и собирает исходные данные.{" "}
                <Link
                  href="/services/ai-agents"
                  className="font-semibold text-text-light hover:text-[--color-accent-red]"
                >
                  ИИ-агент
                </Link>{" "}
                выполняет действия в подключённых системах. Корпоративная{" "}
                <Link
                  href="/services/digital-asset"
                  className="font-semibold text-text-light hover:text-[--color-accent-red]"
                >
                  база знаний
                </Link>{" "}
                даёт им проверенную информацию о продуктах, ценах и правилах.
              </p>
              <p>
                Конкретная схема зависит от процесса: для простого ответа
                достаточно бота, а заполнение CRM и контроль задач требуют
                интеграций и разграничения прав.
              </p>
            </div>
          </section>

          <section
            id="data"
            className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-7 md:p-9"
          >
            <h2 className="mb-5 text-2xl font-bold text-text-light">
              Какие данные и интеграции нужны
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "CRM и история сделок",
                "сайт, почта, телефония и мессенджеры",
                "каталог, цены и шаблоны документов",
                "регламенты и база знаний",
                "роли сотрудников и права доступа",
                "правила подтверждения важных действий",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-text-muted">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 flex-shrink-0 text-[--color-accent-red]"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="metrics">
            <h2 className="mb-7 text-2xl font-bold text-text-light md:text-3xl">
              По каким KPI оценивать пилот
            </h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["Скорость", "время первого ответа и подготовки КП"],
                ["Дисциплина", "полнота CRM и доля сделок со следующим шагом"],
                ["Качество", "ошибки в данных и доля возвратов на доработку"],
                ["Воронка", "конверсия между выбранными этапами"],
                ["Нагрузка", "время менеджеров на повторяющиеся операции"],
                ["Контроль", "число обращений и задач без своевременной реакции"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-secondary-dark/60 p-6"
                >
                  <h3 className="mb-2 font-semibold text-text-light">{title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-text-muted">
              Целевые значения фиксируются после замера текущего процесса.
              Это позволяет оценивать не обещания технологии, а изменение
              конкретного показателя.
            </p>
          </section>

          <section id="faq">
            <h2 className="mb-7 text-2xl font-bold text-text-light md:text-3xl">
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <details
                  key={item.question}
                  className="rounded-xl border border-white/10 bg-secondary-dark/60 p-5"
                >
                  <summary className="cursor-pointer font-semibold text-text-light">
                    {item.question}
                  </summary>
                  <p className="mt-3 leading-relaxed text-text-muted">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-[--color-accent-red]/30 bg-secondary-dark/70 p-7 text-center md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-text-light">
              Хотите определить первый сценарий для отдела продаж?
            </h2>
            <p className="mx-auto mb-7 max-w-2xl text-text-muted">
              Разберём текущую воронку, выберем ограниченный пилот и зафиксируем
              показатели, по которым можно проверить результат.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/services/ai-sales-automation"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[--color-accent-red] px-6 py-3 font-semibold text-white transition-colors hover:bg-[--color-accent-red-hover]"
              >
                Автоматизировать продажи
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/cases/equipment-sales"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-text-light transition-colors hover:border-[--color-accent-red]"
              >
                Посмотреть решение
              </Link>
            </div>
          </section>
        </article>
      </PageWrapper>
    </>
  );
}
