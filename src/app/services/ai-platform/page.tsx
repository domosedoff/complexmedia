import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ClipboardList,
  FileText,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { ServiceNavigation } from "@/components/ServiceNavigation";
import {
  DemoRequestForm,
  FaqItem,
  PlatformDemo,
  PlatformPreview,
  TrackedLink,
  platformTelegramHref,
} from "@/components/AiPlatformInteractive";

const title =
  "ИИ Harness для бизнеса — корпоративная база знаний и цифровые сотрудники | Комплекс Медиа";
const description =
  "ИИ Harness для бизнеса: корпоративная база знаний, цифровые сотрудники и автоматизация рабочих процессов с контролем источников, доступов и результатов.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/services/ai-platform" },
  openGraph: {
    title,
    description,
    url: "/services/ai-platform",
    siteName: "Комплекс Медиа",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

const howItWorks = [
  [
    "Собираем знания",
    "Документы, инструкции, FAQ, каталоги и правила компании приводим к единой структуре.",
  ],
  [
    "Настраиваем цифровых сотрудников",
    "Каждый цифровой сотрудник получает роль, рабочий сценарий, доступы и понятные границы ответственности.",
  ],
  [
    "Подключаем процессы",
    "Связываем базу знаний с задачами команды, рабочими каналами и системами, которыми уже пользуется бизнес.",
  ],
  [
    "Оставляем контроль",
    "Источники, версии, права доступа и история действий доступны руководителю для проверки и улучшения сценария.",
  ],
];

const capabilities = [
  {
    icon: Sparkles,
    title: "Цифровые сотрудники",
    text: "Консультант, помощник продаж, HR-специалист или технический эксперт работают по заданным правилам компании.",
  },
  {
    icon: BookOpenCheck,
    title: "Корпоративная база знаний и Wiki",
    text: "Регламенты, инструкции, ответы и каталоги хранятся с версиями, источниками и управляемыми правами доступа.",
  },
  {
    icon: ClipboardList,
    title: "Задачи и процессы",
    text: "ИИ принимает поручения, формирует результат по сценарию, напоминает о сроках и передаёт сложные случаи человеку.",
  },
  {
    icon: FileText,
    title: "Файлы и документы",
    text: "Помогает находить сведения, сравнивать версии, готовить документы, отчёты и коммерческие предложения.",
  },
  {
    icon: ShieldCheck,
    title: "Источники, версии и аудит",
    text: "Ответы опираются на разрешённые материалы, а изменения и действия остаются проверяемыми.",
  },
  {
    icon: UsersRound,
    title: "Доступы и структура компании",
    text: "Разным отделам и ролям можно дать разные знания, сценарии и уровни подтверждения результата.",
  },
];

const scenarios = [
  {
    title: "Поддержка клиентов",
    problem: "Операторы тратят время на повторяющиеся вопросы и поиск актуальных правил.",
    does: "Отвечает по базе знаний, находит источник и передаёт нестандартный случай специалисту.",
    control: "Руководитель утверждает правила эскалации и видит историю обращений.",
  },
  {
    title: "Продажи и коммерческие предложения",
    problem: "Менеджерам приходится вручную искать характеристики, цены и материалы для КП.",
    does: "Подбирает сведения из каталога, собирает черновик предложения и отмечает, что нужно проверить.",
    control: "Финальная цена, условия и отправка клиенту остаются под подтверждением менеджера.",
  },
  {
    title: "Внутренний HR-помощник",
    problem: "Сотрудники задают HR одни и те же вопросы о правилах, отпусках и адаптации.",
    does: "Отвечает по внутренним документам и ведёт сотрудника по стандартному сценарию.",
    control: "HR управляет источниками, правами доступа и перечнем вопросов, требующих человека.",
  },
  {
    title: "Техническая и производственная база",
    problem: "Регламенты и инструкции разбросаны по папкам, а нужная версия находится долго.",
    does: "Находит процедуру, показывает версию документа и формирует последовательность действий.",
    control: "Инженер или руководитель подтверждает критичные операции и изменения регламента.",
  },
  {
    title: "Логистика и закупки",
    problem: "Повторяющиеся проверки заявок, условий поставщиков и статусов занимают время команды.",
    does: "Сверяет данные по заданным правилам и готовит список следующих шагов.",
    control: "Сотрудник принимает решение по исключениям и финансовым условиям.",
  },
  {
    title: "Помощник руководителя",
    problem: "Руководитель переключается между почтой, задачами, документами и сводками.",
    does: "Собирает управленческие сведения, готовит черновики и напоминает о следующих шагах.",
    control: "Чувствительные действия, ответы и решения выполняются только после подтверждения.",
  },
];

const faqItems = [
  [
    "Что такое ИИ Harness?",
    "Это управляемая среда, в которой корпоративные знания, цифровые сотрудники и рабочие процессы собраны в едином контуре с понятными правилами и контролем.",
  ],
  [
    "Чем цифровой сотрудник отличается от обычного чат-бота?",
    "Он работает не только в диалоге: получает роль и сценарий, использует разрешённые источники, выполняет последовательность действий и передаёт результат человеку, когда это необходимо.",
  ],
  [
    "Можно ли начать с одного процесса?",
    "Да. Обычно мы выбираем один повторяющийся сценарий, собираем пилот, проверяем качество и только затем подключаем новые отделы и каналы.",
  ],
  [
    "Какие данные можно подключить?",
    "Документы, Wiki, таблицы, каталоги, инструкции и другие источники, которые компания разрешает использовать. Состав и права доступа определяются на этапе настройки.",
  ],
  [
    "Заменяет ли платформа сотрудников?",
    "Платформа берёт на себя рутинные операции и подготовку результата, а решения, исключения и чувствительные действия остаются под контролем ответственных сотрудников.",
  ],
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ИИ Harness для бизнеса",
  serviceType: "Внедрение корпоративной платформы ИИ",
  description,
  url: "https://complexmedia.ru/services/ai-platform",
  provider: {
    "@type": "Organization",
    name: "Комплекс Медиа",
    url: "https://complexmedia.ru",
  },
  areaServed: { "@type": "Country", name: "Россия" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function AiPlatformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-primary-dark text-text-light">
        <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(174,30,30,0.22),_transparent_45%)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[--color-accent-red]">
                Корпоративная автоматизация ИИ
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                ИИ Harness для бизнеса
              </h1>
              <p className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-text-light md:text-3xl">
                Создайте управляемую цифровую команду для бизнеса
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
                Единая среда, где корпоративные знания превращаются в работающие процессы: цифровые сотрудники отвечают по правилам компании, выполняют заданные сценарии и оставляют руководителю контроль.
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-text-muted">
                Цифровой сотрудник — это помощник, который выполняет рабочий сценарий по инструкциям вашей компании, а не универсальный чат без контекста.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <TrackedLink
                  href="#demo"
                  event="ai_platform_demo_click"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[--color-accent-red] px-6 py-3 font-semibold text-white transition-colors hover:bg-[--color-accent-red-hover]"
                >
                  Показать, как это работает <ArrowRight size={18} />
                </TrackedLink>
                <TrackedLink
                  href="#demo-request"
                  event="ai_platform_cta_click"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-text-light transition-colors hover:border-[--color-accent-red]"
                >
                  Обсудить пилот
                </TrackedLink>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-muted">
                <TrackedLink
                  href={platformTelegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  event="ai_platform_telegram_click"
                  className="underline-offset-4 hover:text-text-light hover:underline"
                >
                  Написать в Telegram
                </TrackedLink>
                <a href="tel:+74951085316" className="hover:text-text-light">
                  +7 (495) 108-53-16
                </a>
              </div>
            </div>
            <PlatformPreview />
          </div>
        </section>

        <main className="mx-auto max-w-7xl space-y-16 px-5 py-12 md:space-y-24 md:px-8 md:py-20">
          <section aria-labelledby="how-it-works">
            <div className="mb-8 max-w-3xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Как это устроено
              </p>
              <h2 id="how-it-works" className="text-3xl font-bold md:text-4xl">
                От знаний компании — к понятному результату
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map(([stepTitle, text], index) => (
                <article
                  key={stepTitle}
                  className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-6"
                >
                  <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[--color-accent-red]/15 font-bold text-[--color-accent-red]">
                    0{index + 1}
                  </span>
                  <h3 className="mb-3 text-lg font-semibold">{stepTitle}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <PlatformDemo />

          <section className="rounded-2xl border border-[--color-accent-red]/30 bg-secondary-dark/70 p-7 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Первый шаг
              </p>
              <h2 className="text-2xl font-bold md:text-3xl">
                Начните с одного процесса, который уже сейчас отнимает время команды
              </h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-text-muted">
                Мы разберём задачу, покажем подходящий сценарий на демонстрационных материалах и определим состав пилота.
              </p>
            </div>
            <TrackedLink
              href="#demo-request"
              event="ai_platform_cta_click"
              className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[--color-accent-red] px-6 py-3 font-semibold text-white hover:bg-[--color-accent-red-hover] md:mt-0"
            >
              Обсудить пилот <ArrowRight size={18} />
            </TrackedLink>
          </section>

          <section aria-labelledby="capabilities">
            <div className="mb-8 max-w-3xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Возможности
              </p>
              <h2 id="capabilities" className="text-3xl font-bold md:text-4xl">
                Что входит в платформу
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(({ icon: Icon, title: cardTitle, text }) => (
                <article
                  key={cardTitle}
                  className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-6"
                >
                  <Icon size={25} className="mb-5 text-[--color-accent-red]" />
                  <h3 className="mb-3 text-lg font-semibold">{cardTitle}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Подключение
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                Рабочие каналы остаются на месте
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                Платформу можно связать с сайтом, Telegram, MAX, Jivo, корпоративной почтой и другими каналами. Мы выбираем только те подключения, которые нужны конкретному процессу.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Сайт и форма обращения",
                "Telegram и мессенджеры",
                "CRM и рабочие системы",
                "Почта и внутренние чаты",
                "Wiki, документы и таблицы",
                "Роли и маршруты согласования",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-white/10 bg-secondary-dark/70 p-4 text-sm text-text-muted"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[--color-accent-red]"
                  />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="scenarios">
            <div className="mb-8 max-w-3xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Сценарии
              </p>
              <h2 id="scenarios" className="text-3xl font-bold md:text-4xl">
                Где цифровые сотрудники помогают бизнесу
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {scenarios.map((scenario) => (
                <article
                  key={scenario.title}
                  className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-6"
                >
                  <h3 className="mb-4 text-xl font-semibold">{scenario.title}</h3>
                  <dl className="space-y-4 text-sm leading-relaxed">
                    <div>
                      <dt className="font-semibold text-text-light">Проблема</dt>
                      <dd className="mt-1 text-text-muted">{scenario.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-text-light">Что делает ИИ</dt>
                      <dd className="mt-1 text-text-muted">{scenario.does}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-text-light">Что остаётся под контролем</dt>
                      <dd className="mt-1 text-text-muted">{scenario.control}</dd>
                    </div>
                  </dl>
                  <TrackedLink
                    href="#demo-request"
                    event="ai_platform_scenario_click"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-text-light hover:text-[--color-accent-red]"
                  >
                    Обсудить сценарий <ArrowRight size={16} />
                  </TrackedLink>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 rounded-2xl border border-white/10 bg-secondary-dark/70 p-7 md:grid-cols-2 md:p-10">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Бизнес-анализ перед пилотом
              </p>
              <h2 className="text-2xl font-bold md:text-3xl">
                Сначала находим участок с максимальным эффектом
              </h2>
              <p className="mt-4 leading-relaxed text-text-muted">
                Разбираем информационные потоки, ручные операции и текущие системы вместе с руководителем и сотрудниками. Затем составляем карту автоматизации: быстрые улучшения, пилот и следующие этапы.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Выбираем процесс с понятным результатом и ответственным владельцем.",
                "Фиксируем источники, правила, исключения и критерии проверки.",
                "Расширяем решение только после проверки на реальном рабочем сценарии.",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm text-text-muted">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-[--color-accent-red]"
                    size={18}
                  />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section id="demo-request" className="scroll-mt-28">
            <DemoRequestForm />
          </section>

          <section aria-labelledby="faq">
            <div className="mb-8 max-w-3xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                FAQ
              </p>
              <h2 id="faq" className="text-3xl font-bold md:text-4xl">
                Вопросы о платформе ИИ
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {faqItems.map(([question, answer]) => (
                <FaqItem key={question} question={question} answer={answer} />
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-[--color-accent-red]/30 bg-secondary-dark/70 p-8 text-center md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">Покажем сценарий для вашей компании</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-text-muted">
              Расскажите, где команда теряет время, — предложим управляемый пилот на ваших приоритетах.
            </p>
            <TrackedLink
              href="#demo-request"
              event="ai_platform_cta_click"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[--color-accent-red] px-6 py-3 font-semibold text-white hover:bg-[--color-accent-red-hover]"
            >
              Обсудить задачу <ArrowRight size={18} />
            </TrackedLink>
          </section>

          <ServiceNavigation />
        </main>
      </div>
    </>
  );
}
