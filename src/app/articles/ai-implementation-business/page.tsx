import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  ListChecks,
  ShieldCheck,
  Target,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { createPageMetadata } from "@/seo";

export const metadata = createPageMetadata({
  title: "Внедрение ИИ в бизнес: этапы, стоимость и пилот",
  description:
    "Практическое руководство по внедрению ИИ в компанию: как выбрать первый процесс, оценить данные и стоимость, запустить пилот и измерить результат.",
  path: "/articles/ai-implementation-business",
  type: "article",
});

const stages = [
  {
    title: "1. Цель и границы",
    text: "Определяем бизнес-задачу, владельца процесса и ограниченный сценарий, который можно проверить без перестройки всей компании.",
  },
  {
    title: "2. Карта процесса",
    text: "Фиксируем участников, входящие данные, ручные операции, задержки, ошибки и результат текущего процесса.",
  },
  {
    title: "3. Готовность данных",
    text: "Проверяем документы, базы знаний, CRM, ERP, почту, доступные API, качество информации и права доступа.",
  },
  {
    title: "4. Проектирование пилота",
    text: "Выбираем архитектуру, интеграции, действия на подтверждении и показатели, по которым будет оцениваться результат.",
  },
  {
    title: "5. Запуск и измерение",
    text: "Тестируем решение на ограниченной группе, сравниваем показатели до и после и собираем обратную связь сотрудников.",
  },
  {
    title: "6. Масштабирование",
    text: "После подтверждения эффекта расширяем сценарий, подключаем новые подразделения и закрепляем правила эксплуатации.",
  },
];

const faq = [
  {
    question: "С чего начать внедрение ИИ в компании?",
    answer:
      "С одного повторяемого процесса, для которого известны текущие затраты времени, результат и ответственный. Это позволяет проверить пользу ИИ на измеримом пилоте.",
  },
  {
    question: "Как понять, что процесс подходит для автоматизации?",
    answer:
      "Подходящий процесс повторяется, использует доступные данные, содержит много ручных операций и имеет понятный показатель качества, скорости или стоимости.",
  },
  {
    question: "От чего зависит стоимость внедрения ИИ?",
    answer:
      "От границ сценария, качества данных, количества интеграций, требований безопасности, объёма разработки интерфейса и последующего сопровождения.",
  },
  {
    question: "Нужно ли сразу давать ИИ право выполнять действия?",
    answer:
      "Нет. На пилоте важные действия можно оставить на подтверждении сотрудника, сохранив журнал операций и постепенно расширяя автономность.",
  },
];

export default function AiImplementationBusinessArticle() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Внедрение ИИ в бизнес: этапы, стоимость и выбор пилота",
        description:
          "Как выбрать первый процесс, подготовить данные, оценить стоимость и измерить результат внедрения ИИ.",
        datePublished: "2026-07-30",
        dateModified: "2026-07-30",
        inLanguage: "ru-RU",
        mainEntityOfPage:
          "https://complexmedia.ru/articles/ai-implementation-business",
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
            name: "Внедрение ИИ в бизнес",
            item: "https://complexmedia.ru/articles/ai-implementation-business",
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
      <PageWrapper title="Внедрение ИИ в бизнес: этапы, стоимость и выбор первого процесса">
        <article className="mx-auto max-w-5xl space-y-12 rounded-3xl bg-primary-dark/95 p-4 md:space-y-16 md:p-8">
          <header className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-7 shadow-lg md:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
              Практическое руководство
            </p>
            <p className="text-xl font-medium leading-relaxed text-text-light md:text-2xl">
              Успешное внедрение ИИ начинается не с покупки технологии, а с
              ограниченной бизнес-задачи, доступных данных и заранее
              согласованного способа измерить результат.
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
                ["#process", "Как выбрать первый процесс"],
                ["#stages", "Этапы внедрения ИИ"],
                ["#cost", "От чего зависит стоимость"],
                ["#metrics", "Как измерять пилот"],
                ["#mistakes", "Типовые ошибки"],
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

          <section id="process">
            <div className="mb-6 flex items-center gap-3">
              <Target className="text-[--color-accent-red]" />
              <h2 className="text-2xl font-bold text-text-light md:text-3xl">
                Как выбрать первый процесс для внедрения ИИ
              </h2>
            </div>
            <p className="mb-6 leading-relaxed text-text-muted">
              Первый пилот должен быть достаточно важным, чтобы эффект был
              заметен, но достаточно ограниченным, чтобы его можно было быстро
              проверить и безопасно остановить. Хороший кандидат соответствует
              нескольким признакам:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "процесс регулярно повторяется",
                "сотрудники тратят много времени на ручные действия",
                "данные уже существуют в цифровом виде",
                "результат можно измерить до и после",
                "ошибки или задержки имеют понятную стоимость",
                "есть владелец процесса и пользователи пилота",
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
            <p className="mt-6 leading-relaxed text-text-muted">
              Например, первым сценарием может стать квалификация входящих
              заявок, подготовка типового коммерческого предложения, поиск по
              внутренним документам или разбор почты руководителя. Полностью
              автономное управление критическим процессом для первого пилота
              обычно не требуется.
            </p>
          </section>

          <section id="stages">
            <div className="mb-6 flex items-center gap-3">
              <ListChecks className="text-[--color-accent-red]" />
              <h2 className="text-2xl font-bold text-text-light md:text-3xl">
                Этапы внедрения ИИ в компанию
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {stages.map((stage) => (
                <div
                  key={stage.title}
                  className="rounded-xl border border-white/10 bg-secondary-dark/60 p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold text-text-light">
                    {stage.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {stage.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="cost"
            className="grid gap-8 rounded-2xl border border-white/10 bg-secondary-dark/70 p-7 lg:grid-cols-2 lg:p-9"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <CircleDollarSign className="text-[--color-accent-red]" />
                <h2 className="text-2xl font-bold text-text-light">
                  От чего зависит стоимость внедрения
                </h2>
              </div>
              <p className="leading-relaxed text-text-muted">
                Универсальной цены нет: одинаковый интерфейс может требовать
                принципиально разной работы с данными, интеграциями и
                безопасностью. Поэтому сначала фиксируются границы пилота и
                состав результата.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-text-muted">
              {[
                "количество сценариев и ролей пользователей",
                "готовность документов и корпоративных данных",
                "число интеграций с CRM, ERP, почтой и другими системами",
                "требования к интерфейсу, доступам и журналу действий",
                "объём тестирования, обучения и сопровождения",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[--color-accent-red]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="metrics">
            <h2 className="mb-6 text-2xl font-bold text-text-light md:text-3xl">
              Как измерять результат пилота
            </h2>
            <p className="mb-6 leading-relaxed text-text-muted">
              KPI выбираются до разработки и привязываются к исходному процессу,
              а не к количеству запросов к модели. В зависимости от задачи это
              могут быть:
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Скорость", "время ответа, поиска, обработки заявки или подготовки документа"],
                ["Качество", "доля ошибок, полнота CRM, соблюдение регламентов и SLA"],
                ["Ресурсы", "время сотрудников, стоимость операции и пропускная способность"],
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
          </section>

          <section
            id="mistakes"
            className="rounded-2xl border border-[--color-accent-red]/30 bg-secondary-dark/70 p-7 md:p-9"
          >
            <div className="mb-5 flex items-center gap-3">
              <ShieldCheck className="text-[--color-accent-red]" />
              <h2 className="text-2xl font-bold text-text-light md:text-3xl">
                Типовые ошибки при внедрении ИИ
              </h2>
            </div>
            <ul className="space-y-4 text-text-muted">
              {[
                "начинать с технологии без сформулированной бизнес-задачи",
                "пытаться автоматизировать сразу весь процесс или подразделение",
                "не проверять актуальность документов и качество исходных данных",
                "не назначать владельца процесса и пользователей пилота",
                "не фиксировать KPI до запуска",
                "давать системе избыточные права без подтверждений и журнала действий",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-semibold text-[--color-accent-red]">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="faq">
            <h2 className="mb-6 text-2xl font-bold text-text-light md:text-3xl">
              Вопросы о внедрении ИИ
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
                  <p className="mt-4 leading-relaxed text-text-muted">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-[--color-accent-red]/30 bg-secondary-dark/70 p-8 text-center md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-text-light md:text-3xl">
              Нужен план внедрения для вашей компании?
            </h2>
            <p className="mx-auto mb-7 max-w-2xl leading-relaxed text-text-muted">
              На ИИ-консалтинге разберём процессы и данные, выберем первый пилот
              и подготовим дорожную карту с критериями результата.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/services/ai-consulting"
                className="inline-flex items-center gap-2 rounded-lg bg-[--color-accent-red] px-6 py-3 font-semibold text-white transition-colors hover:bg-[--color-accent-red-hover]"
              >
                Перейти к ИИ-консалтингу
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-text-light transition-colors hover:border-white"
              >
                Обсудить задачу
              </Link>
            </div>
          </section>
        </article>
      </PageWrapper>
    </>
  );
}
