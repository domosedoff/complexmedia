import { Suspense } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  FileSpreadsheet,
  MailCheck,
  Search,
  ShieldCheck,
  UserCog,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { ServiceNavigation } from "@/components/ServiceNavigation";
import { createPageMetadata } from "@/seo";

export const metadata = createPageMetadata({
  title: "Заказать личного ИИ-помощника руководителя",
  description:
    "Заказать личного ИИ-помощника руководителя для работы с почтой, календарём, документами, CRM, совещаниями и корпоративной базой знаний.",
  path: "/services/executive-ai-assistant",
});

const capabilities = [
  {
    icon: MailCheck,
    title: "Почта и сообщения",
    text: "Разбирает входящие, выделяет важное и готовит ответы, которые отправляются только после подтверждения.",
  },
  {
    icon: CalendarCheck,
    title: "Календарь и поручения",
    text: "Ставит встречи и задачи, напоминает о сроках, собирает материалы и контролирует следующие шаги.",
  },
  {
    icon: FileSpreadsheet,
    title: "Документы и отчёты",
    text: "Готовит сводки, таблицы, презентации и черновики документов по данным из рабочих систем компании.",
  },
  {
    icon: Search,
    title: "Поиск и анализ",
    text: "Ищет сведения в интернете и базе знаний, сравнивает предложения, рынки, подрядчиков и условия.",
  },
  {
    icon: UserCog,
    title: "CRM и управленческий контроль",
    text: "Находит сделки без следующего шага, просроченные задачи и отклонения, формирует краткую сводку руководителю.",
  },
  {
    icon: ShieldCheck,
    title: "Контроль доступа",
    text: "Работает только с разрешёнными источниками, а чувствительные и внешние действия оставляет на согласовании.",
  },
];

const steps = [
  ["1. Аудит рабочего дня", "Разбираем почту, встречи, поручения, отчёты и повторяющиеся переключения между системами."],
  ["2. Матрица доступа", "Определяем источники данных, права и действия, которые помощник может выполнять сам или только после подтверждения."],
  ["3. Пилотный контур", "Запускаем несколько ежедневных сценариев с понятной экономией времени и журналом действий."],
  ["4. Расширение", "После проверки добавляем CRM, базу знаний, документооборот и новые управленческие процессы."],
];

export default function ExecutiveAiAssistantPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ИИ-помощник руководителя",
    serviceType: "Личный ИИ-ассистент руководителя",
    provider: {
      "@type": "Organization",
      name: "Комплекс Медиа",
      url: "https://complexmedia.ru",
    },
    areaServed: "RU",
    url: "https://complexmedia.ru/services/executive-ai-assistant",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageWrapper
        title="ИИ-помощник руководителя для бизнеса"
        showCta
        personalTelegramLink="https://t.me/domosedoff"
        ctaText="Обсудить личного ИИ-помощника"
      >
        <Suspense fallback={<div>Загрузка навигации...</div>}>
          <ServiceNavigation />
        </Suspense>

        <div className="space-y-12 md:space-y-20">
          <section className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-8 shadow-lg md:p-10">
            <p className="mb-5 text-xl font-medium leading-relaxed text-text-light md:text-2xl">
              Личный ИИ-ассистент руководителя собирает рабочую координацию в
              одном окне и берёт на себя рутину, не забирая контроль над
              решениями.
            </p>
            <p className="mb-7 max-w-4xl leading-relaxed text-text-muted">
              Помощнику можно ставить задачи текстом или голосом. Он подключается
              к привычным инструментам компании, готовит результат и запрашивает
              подтверждение перед важным действием.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[--color-accent-red] px-6 py-3 font-semibold text-white transition-colors hover:bg-[--color-accent-red-hover]"
            >
              Заказать ИИ-помощника руководителя
              <ArrowRight size={18} />
            </Link>
          </section>

          <section>
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Ежедневная работа
              </p>
              <h2 className="text-3xl font-bold text-text-light">
                Что умеет ИИ-ассистент руководителя
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-xl border border-white/10 bg-secondary-dark/70 p-6 shadow-lg"
                >
                  <Icon
                    size={32}
                    strokeWidth={1.5}
                    className="mb-4 text-[--color-accent-red]"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-text-light">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-8">
              <h2 className="mb-5 text-2xl font-bold text-text-light">
                Единый рабочий контур вместо постоянных переключений
              </h2>
              <div className="space-y-4">
                {[
                  "Почта, сообщения и черновики ответов",
                  "Календарь, поручения и итоги совещаний",
                  "Документы, таблицы и управленческие отчёты",
                  "CRM, сделки, сроки и следующие шаги",
                  "Корпоративная база знаний и внешние источники",
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
              <p className="mt-6 text-sm leading-relaxed text-text-muted">
                Технически такой контур может быть собран в архитектуре AI
                Harness, где модель, память, инструменты и права работают
                согласованно; одной из возможных основ выступает Hermes.
              </p>
            </div>
            <div className="rounded-2xl border border-[--color-accent-red]/30 bg-secondary-dark/70 p-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Целевые KPI пилота
              </p>
              <div className="space-y-5">
                {[
                  ["60–90 мин.", "экономии времени руководителя в день"],
                  ["5–10 мин.", "подготовка итогов встречи"],
                  ["100%", "важных действий после подтверждения"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className="text-2xl font-bold text-text-light">
                      {value}
                    </div>
                    <div className="text-sm text-text-muted">{label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-text-muted">
                Показатели уточняются после аудита рабочего контура и
                фиксируются для пилотного периода.
              </p>
            </div>
          </section>

          <section>
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Внедрение
              </p>
              <h2 className="text-3xl font-bold text-text-light">
                Как запускаем личного ИИ-помощника
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {steps.map(([title, text]) => (
                <article
                  key={title}
                  className="rounded-xl border border-white/10 bg-secondary-dark/60 p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold text-text-light">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-8 text-center md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-text-light">
              Посмотрите рабочий интерфейс помощника
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-text-muted">
              Пример показывает сводку руководителя, встречи, задачи,
              документы и действия, ожидающие подтверждения.
            </p>
            <Link
              href="/cases/executive-assistant"
              className="inline-flex items-center gap-2 font-semibold text-text-light transition-colors hover:text-[--color-accent-red]"
            >
              Открыть решение
              <ArrowRight size={18} />
            </Link>
          </section>
        </div>
      </PageWrapper>
    </>
  );
}
