import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  MessageSquare,
  Network,
  ShieldCheck,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { createPageMetadata } from "@/seo";

export const metadata = createPageMetadata({
  title: "ИИ-агент или ИИ-чат-бот: что выбрать бизнесу",
  description:
    "Чем ИИ-агент отличается от ИИ-чат-бота, для каких задач подходит каждый формат, когда их объединять и как выбрать безопасный пилот для компании.",
  path: "/articles/ai-agent-vs-chatbot",
  type: "article",
});

const differences = [
  {
    criterion: "Основная роль",
    bot: "ведёт диалог и помогает получить информацию",
    agent: "выполняет последовательность действий для достижения цели",
  },
  {
    criterion: "Начало работы",
    bot: "обычно реагирует на сообщение пользователя",
    agent: "может запускаться по задаче, событию или расписанию",
  },
  {
    criterion: "Работа с системами",
    bot: "получает данные и передаёт запрос сотруднику",
    agent: "читает и обновляет данные в разрешённых системах",
  },
  {
    criterion: "Самостоятельность",
    bot: "следует ограниченному сценарию диалога",
    agent: "выбирает шаги в заданных границах и контролирует результат",
  },
];

const faq = [
  {
    question: "Может ли ИИ-чат-бот выполнять действия?",
    answer:
      "Да. Бот может вызывать отдельные функции, например создавать заявку. Отличие агента проявляется в многошаговой работе: он планирует последовательность действий, проверяет промежуточный результат и продолжает до заданной цели.",
  },
  {
    question: "Что проще внедрить первым?",
    answer:
      "Обычно чат-бот с ограниченным сценарием. Но если основная проблема находится не в общении, а в ручной работе между системами, небольшой ИИ-агент может дать более полезный пилот.",
  },
  {
    question: "Можно ли объединить бота и агента?",
    answer:
      "Да. Бот принимает запрос и общается с пользователем, а агент выполняет действия в CRM, ERP, почте или других подключённых системах.",
  },
  {
    question: "Как ограничить риск ошибочных действий агента?",
    answer:
      "Использовать минимальные права, подтверждение важных операций, журнал действий, тестовую среду и чёткие условия остановки или передачи задачи сотруднику.",
  },
];

export default function AiAgentVsChatbotArticle() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "ИИ-агент или ИИ-чат-бот: что выбрать для задач компании",
        description:
          "Сравнение ИИ-агента и ИИ-чат-бота по задачам, самостоятельности, интеграциям, рискам и сценарию пилота.",
        datePublished: "2026-07-30",
        dateModified: "2026-07-30",
        inLanguage: "ru-RU",
        mainEntityOfPage:
          "https://complexmedia.ru/articles/ai-agent-vs-chatbot",
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
            name: "ИИ-агент или ИИ-чат-бот",
            item: "https://complexmedia.ru/articles/ai-agent-vs-chatbot",
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
      <PageWrapper title="ИИ-агент или ИИ-чат-бот: что выбрать для задач компании">
        <article className="mx-auto max-w-5xl space-y-12 rounded-3xl bg-primary-dark/95 p-4 md:space-y-16 md:p-8">
          <header className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-7 shadow-lg md:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
              Сравнение решений
            </p>
            <p className="text-xl font-medium leading-relaxed text-text-light md:text-2xl">
              Чат-бот нужен прежде всего для диалога. ИИ-агент — для
              многошаговой работы в подключённых системах. На практике они
              часто работают вместе: бот принимает запрос, а агент выполняет
              разрешённые действия.
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
                ["#difference", "Главное отличие"],
                ["#comparison", "Сравнение по критериям"],
                ["#choice", "Что выбрать"],
                ["#together", "Когда объединять"],
                ["#pilot", "Как запустить пилот"],
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

          <section id="difference">
            <h2 className="mb-7 text-2xl font-bold text-text-light md:text-3xl">
              Главное отличие — не интеллект, а границы работы
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-secondary-dark/60 p-6">
                <MessageSquare
                  size={30}
                  className="mb-4 text-[--color-accent-red]"
                />
                <h3 className="mb-3 text-xl font-semibold text-text-light">
                  ИИ-чат-бот
                </h3>
                <p className="leading-relaxed text-text-muted">
                  Отвечает на вопросы, уточняет потребность, помогает выбрать
                  услугу, собирает данные и передаёт обращение сотруднику.
                  Основной интерфейс — диалог.
                </p>
                <Link
                  href="/services/ai-bots"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-text-light hover:text-[--color-accent-red]"
                >
                  ИИ-чат-боты для бизнеса
                  <ArrowRight size={17} />
                </Link>
              </div>
              <div className="rounded-xl border border-white/10 bg-secondary-dark/60 p-6">
                <Bot
                  size={30}
                  className="mb-4 text-[--color-accent-red]"
                />
                <h3 className="mb-3 text-xl font-semibold text-text-light">
                  ИИ-агент
                </h3>
                <p className="leading-relaxed text-text-muted">
                  Получает цель, выбирает допустимые шаги, работает с данными и
                  инструментами, проверяет результат и сообщает о выполнении
                  либо передаёт исключение сотруднику.
                </p>
                <Link
                  href="/services/ai-agents"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-text-light hover:text-[--color-accent-red]"
                >
                  Разработка ИИ-агентов
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </section>

          <section id="comparison">
            <h2 className="mb-7 text-2xl font-bold text-text-light md:text-3xl">
              Сравнение ИИ-агента и чат-бота
            </h2>
            <div className="space-y-5">
              {differences.map((item) => (
                <div
                  key={item.criterion}
                  className="grid gap-4 rounded-xl border border-white/10 bg-secondary-dark/60 p-6 md:grid-cols-[0.7fr_1fr_1fr]"
                >
                  <h3 className="font-semibold text-text-light">
                    {item.criterion}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[--color-accent-red]">
                      Чат-бот
                    </span>
                    {item.bot}
                  </p>
                  <p className="text-sm leading-relaxed text-text-muted">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[--color-accent-red]">
                      ИИ-агент
                    </span>
                    {item.agent}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="choice">
            <h2 className="mb-7 text-2xl font-bold text-text-light md:text-3xl">
              Что выбрать для задачи компании
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-secondary-dark/60 p-6">
                <h3 className="mb-4 text-lg font-semibold text-text-light">
                  Выбирайте чат-бота, если нужно
                </h3>
                <ul className="space-y-3 text-text-muted">
                  {[
                    "отвечать клиентам и сотрудникам 24/7",
                    "обрабатывать несколько диалогов одновременно",
                    "квалифицировать обращения",
                    "искать ответы в базе знаний",
                    "передавать сложный запрос специалисту",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 flex-shrink-0 text-[--color-accent-red]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-secondary-dark/60 p-6">
                <h3 className="mb-4 text-lg font-semibold text-text-light">
                  Выбирайте ИИ-агента, если нужно
                </h3>
                <ul className="space-y-3 text-text-muted">
                  {[
                    "выполнять многошаговые задачи",
                    "работать сразу с несколькими системами",
                    "обновлять CRM, ERP или документы",
                    "контролировать сроки и следующие шаги",
                    "готовить результат по событию или расписанию",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 flex-shrink-0 text-[--color-accent-red]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section
            id="together"
            className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-7 md:p-9"
          >
            <div className="mb-5 flex items-center gap-3">
              <Network className="text-[--color-accent-red]" />
              <h2 className="text-2xl font-bold text-text-light md:text-3xl">
                Когда бот и агент работают вместе
              </h2>
            </div>
            <p className="mb-6 leading-relaxed text-text-muted">
              Например, клиент сообщает боту параметры заявки. Бот уточняет
              недостающие данные, затем агент проверяет наличие в ERP, создаёт
              карточку в CRM, готовит черновик предложения и ставит задачу
              менеджеру. Клиент видит единый диалог, а компания получает
              связанный процесс.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cases/logistics-agent"
                className="font-semibold text-text-light hover:text-[--color-accent-red]"
              >
                Пример для логистики →
              </Link>
              <Link
                href="/cases/cosmetology-clinic"
                className="font-semibold text-text-light hover:text-[--color-accent-red]"
              >
                Пример для клиники →
              </Link>
            </div>
          </section>

          <section id="pilot">
            <div className="mb-6 flex items-center gap-3">
              <ShieldCheck className="text-[--color-accent-red]" />
              <h2 className="text-2xl font-bold text-text-light md:text-3xl">
                Как безопасно запустить пилот
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "выбрать один повторяемый процесс",
                "зафиксировать исходные время, качество и стоимость",
                "дать только минимально необходимые права",
                "оставить важные действия на подтверждении",
                "вести журнал запросов, решений и ошибок",
                "заранее определить условия передачи задачи человеку",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-white/10 bg-secondary-dark/60 p-4 text-text-muted"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 flex-shrink-0 text-[--color-accent-red]"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
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
              Не уверены, какой формат нужен?
            </h2>
            <p className="mx-auto mb-7 max-w-2xl text-text-muted">
              Разберём процесс и предложим минимальный пилот: чат-бот,
              ИИ-агент или связку двух решений.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[--color-accent-red] px-6 py-3 font-semibold text-white transition-colors hover:bg-[--color-accent-red-hover]"
            >
              Подобрать ИИ-решение
              <ArrowRight size={18} />
            </Link>
          </section>
        </article>
      </PageWrapper>
    </>
  );
}
