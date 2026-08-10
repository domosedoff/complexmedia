import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  PhoneCall,
  Route,
  ShieldCheck,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { ServiceNavigation } from "@/components/ServiceNavigation";
import { createPageMetadata } from "@/seo";

export const metadata = createPageMetadata({
  title: "Заказать голосового ИИ-консультанта для бизнеса",
  description:
    "Разрабатываем голосовых ИИ-консультантов для бизнеса: отвечают на звонки, консультируют клиентов, квалифицируют обращения и передают результат сотрудникам.",
  path: "/services/voice-ai-consultant",
});

const capabilities = [
  {
    icon: Clock3,
    title: "Работает 24/7",
    text: "Принимает несколько обращений одновременно, отвечает без ожидания и не теряет клиента в нерабочее время.",
  },
  {
    icon: PhoneCall,
    title: "Разговаривает по телефону",
    text: "Понимает устную речь, уточняет задачу, отвечает на типовые вопросы и ведёт диалог по сценарию компании.",
  },
  {
    icon: Route,
    title: "Передаёт обращение дальше",
    text: "Квалифицирует запрос, фиксирует договорённости и направляет сложные вопросы сотруднику или в CRM.",
  },
  {
    icon: ShieldCheck,
    title: "Работает по правилам бизнеса",
    text: "Использует согласованную базу знаний, ограничения доступа и сценарии эскалации для чувствительных действий.",
  },
];

const steps = [
  [
    "1. Разбираем сценарии звонков",
    "Определяем типовые вопросы, цели разговора, обязательные уточнения и ситуации, когда нужен сотрудник.",
  ],
  [
    "2. Подключаем знания и телефонию",
    "Настраиваем голосовой канал, базу знаний и передачу данных в CRM, таблицу или другой рабочий инструмент.",
  ],
  [
    "3. Проверяем качество диалогов",
    "Тестируем реальные формулировки, уточняем тон общения и контролируем корректность ответов до запуска.",
  ],
  [
    "4. Запускаем и улучшаем",
    "Собираем статистику по обращениям, находим повторяющиеся вопросы и постепенно расширяем сценарии.",
  ],
];

const faqItems = [
  [
    "Что умеет голосовой ИИ-консультант?",
    "Он отвечает на типовые вопросы, уточняет задачу клиента, собирает данные для заявки и передаёт сложные обращения сотруднику или в CRM.",
  ],
  [
    "Можно ли подключить консультанта к существующему номеру?",
    "В большинстве сценариев — да. На предварительном анализе проверяем текущую телефонию, правила маршрутизации и возможность сохранить привычный номер компании.",
  ],
  [
    "Как контролируется качество ответов?",
    "Перед запуском согласуем базу знаний, сценарии и границы полномочий, затем тестируем реальные формулировки и постепенно расширяем набор задач по статистике звонков.",
  ],
  [
    "Можно ли связать голосового ИИ с CRM?",
    "Да, если CRM предоставляет подходящий способ интеграции. Консультант может передавать карточку обращения, результаты квалификации и следующий шаг для менеджера.",
  ],
];

export default function VoiceAiConsultantPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Голосовой ИИ-консультант для бизнеса",
    serviceType: "Разработка и внедрение голосового ИИ-консультанта",
    provider: {
      "@type": "Organization",
      name: "Комплекс Медиа",
      url: "https://complexmedia.ru",
      telephone: "+74951085316",
    },
    areaServed: "RU",
    url: "https://complexmedia.ru/services/voice-ai-consultant",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageWrapper
        title="Голосовой ИИ-консультант для бизнеса"
        showCta
        personalTelegramLink="/contact"
        ctaText="Заказать голосового ИИ-консультанта"
      >
        <ServiceNavigation />

        <div className="space-y-12 md:space-y-20">
          <section className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-8 shadow-lg md:p-10">
            <p className="mb-5 text-xl font-medium leading-relaxed text-text-light md:text-2xl">
              Голосовой ИИ-консультант принимает звонки, отвечает клиентам и помогает
              сотрудникам не терять обращения.
            </p>
            <p className="mb-7 max-w-4xl leading-relaxed text-text-muted">
              Подключаем консультанта к телефону, базе знаний и рабочим системам компании.
              Он может рассказать об услугах, собрать исходные данные, записать клиента,
              квалифицировать обращение и передать его ответственному сотруднику.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="tel:+74951085316"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[--color-accent-red] px-6 py-3 font-semibold text-white transition-colors hover:bg-[--color-accent-red-hover]"
              >
                Позвонить на демонстрационную линию
                <PhoneCall size={18} />
              </a>
              <span className="text-sm text-text-muted">+7 (495) 108-53-16</span>
            </div>
          </section>

          <section>
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Возможности
              </p>
              <h2 className="text-3xl font-bold text-text-light">
                Что делает голосовой ИИ-консультант
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
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
                  <h3 className="mb-2 text-lg font-semibold text-text-light">{title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-8">
              <h2 className="mb-5 text-2xl font-bold text-text-light">
                Как внедряем телефонного ИИ-консультанта
              </h2>
              <div className="space-y-4">
                {steps.map(([title, text]) => (
                  <article key={title}>
                    <h3 className="mb-1 text-lg font-semibold text-text-light">{title}</h3>
                    <p className="text-sm leading-relaxed text-text-muted">{text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[--color-accent-red]/30 bg-secondary-dark/70 p-8">
              <h2 className="mb-4 text-2xl font-bold text-text-light">Подходит для задач</h2>
              <div className="space-y-4">
                {[
                  "первичной консультации и квалификации клиентов",
                  "записи на услуги и подтверждения обращения",
                  "приёма заявок и передачи данных в CRM",
                  "ответов на вопросы по продуктам, доставке и графику",
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
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-text-light transition-colors hover:text-[--color-accent-red]"
              >
                Обсудить задачу
                <ArrowRight size={18} />
              </Link>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-8 md:p-10">
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                FAQ
              </p>
              <h2 className="text-3xl font-bold text-text-light">
                Вопросы о голосовом ИИ-консультанте
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {faqItems.map(([question, answer]) => (
                <article key={question}>
                  <h3 className="mb-2 text-lg font-semibold text-text-light">{question}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{answer}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </PageWrapper>
    </>
  );
}
