import { Suspense } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Database,
  FileCheck2,
  Route,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { ServiceNavigation } from "@/components/ServiceNavigation";
import { createPageMetadata } from "@/seo";

export const metadata = createPageMetadata({
  title: "ИИ-консалтинг для бизнеса",
  description:
    "Проводим ИИ-консалтинг: анализируем процессы и данные, выбираем приоритетные сценарии, рассчитываем пилот и готовим план внедрения ИИ в компанию.",
  path: "/services/ai-consulting",
});

const deliverables = [
  {
    icon: SearchCheck,
    title: "Карта процессов",
    text: "Фиксируем ручные операции, задержки, повторный ввод данных и участки, где результат зависит от отдельных сотрудников.",
  },
  {
    icon: Route,
    title: "Приоритеты автоматизации",
    text: "Ранжируем сценарии по ожидаемому эффекту, сложности, рискам и готовности данных.",
  },
  {
    icon: Database,
    title: "Оценка данных и систем",
    text: "Проверяем источники знаний, CRM, ERP, документы, доступные API и качество информации для ИИ.",
  },
  {
    icon: Calculator,
    title: "Экономика пилота",
    text: "Считаем текущие затраты процесса, стоимость решения и измеримые показатели для проверки результата.",
  },
  {
    icon: ShieldCheck,
    title: "Риски и контроль",
    text: "Определяем права доступа, персональные данные, действия на подтверждении и требования к журналированию.",
  },
  {
    icon: FileCheck2,
    title: "План внедрения",
    text: "Готовим границы пилота, архитектуру, интеграции, этапы и критерии перехода к масштабированию.",
  },
];

const steps = [
  ["1. Интервью", "Обсуждаем цели с руководителями и сотрудниками, которые ежедневно выполняют выбранные процессы."],
  ["2. Диагностика", "Прослеживаем движение данных и документов, замеряем ручные операции и точки потери времени."],
  ["3. Проектирование", "Сравниваем сценарии и выбираем первый пилот с понятным эффектом и управляемым риском."],
  ["4. Дорожная карта", "Передаём план внедрения, требования к данным и интеграциям, KPI, сроки и оценку ресурсов."],
];

export default function AiConsultingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ИИ-консалтинг для бизнеса",
    serviceType: "Консалтинг и план внедрения ИИ",
    provider: {
      "@type": "Organization",
      name: "Комплекс Медиа",
      url: "https://complexmedia.ru",
    },
    areaServed: "RU",
    url: "https://complexmedia.ru/services/ai-consulting",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageWrapper
        title="ИИ-консалтинг для бизнеса"
        showCta
        personalTelegramLink="https://t.me/domosedoff"
        ctaText="Обсудить ИИ-консалтинг"
      >
        <Suspense fallback={<div>Загрузка навигации...</div>}>
          <ServiceNavigation />
        </Suspense>

        <div className="space-y-12 md:space-y-20">
          <section className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-8 shadow-lg md:p-10">
            <p className="mb-5 text-xl font-medium leading-relaxed text-text-light md:text-2xl">
              Начинаем внедрение ИИ не с выбора модели, а с поиска процесса, где
              автоматизация даст компании измеримый эффект.
            </p>
            <p className="mb-7 max-w-4xl leading-relaxed text-text-muted">
              ИИ-консалтинг связывает бизнес-задачу, данные и технологию:
              показывает, что запускать первым, как проверить результат и какие
              ограничения учесть до начала разработки.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[--color-accent-red] px-6 py-3 font-semibold text-white transition-colors hover:bg-[--color-accent-red-hover]"
            >
              Заказать консультацию по внедрению ИИ
              <ArrowRight size={18} />
            </Link>
          </section>

          <section>
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Результат
              </p>
              <h2 className="text-3xl font-bold text-text-light">
                Что входит в ИИ-консалтинг
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {deliverables.map(({ icon: Icon, title, text }) => (
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

          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-8">
              <h2 className="mb-5 text-2xl font-bold text-text-light">
                Что получает компания
              </h2>
              <div className="space-y-4">
                {[
                  "Карту процессов и найденных точек автоматизации",
                  "Приоритетный список сценариев с объяснением выбора",
                  "Границы и техническую схему первого пилота",
                  "Модель затрат, эффекта и целевые KPI",
                  "Дорожную карту дальнейшего внедрения ИИ",
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
            </div>
            <div className="rounded-2xl border border-[--color-accent-red]/30 bg-secondary-dark/70 p-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Стоимость
              </p>
              <h2 className="mb-4 text-2xl font-bold text-text-light">
                От чего зависит объём работ
              </h2>
              <p className="mb-5 leading-relaxed text-text-muted">
                На оценку влияют количество процессов и подразделений, состав
                систем, доступность данных, требования безопасности и глубина
                проработки будущего пилота.
              </p>
              <p className="text-sm leading-relaxed text-text-muted">
                После короткого вводного разговора фиксируем границы анализа,
                состав результата и прозрачную оценку до начала работ.
              </p>
              <Link
                href="/articles/ai-implementation-business"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-text-light transition-colors hover:text-[--color-accent-red]"
              >
                Руководство по внедрению ИИ
                <ArrowRight size={18} />
              </Link>
            </div>
          </section>

          <section>
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Процесс
              </p>
              <h2 className="text-3xl font-bold text-text-light">
                Как проходит консалтинг по внедрению ИИ
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
              Посмотрите типовые сценарии автоматизации
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-text-muted">
              Кейсы показывают, как бизнес-анализ превращается в конкретные
              решения для продаж, производства, логистики и управления.
            </p>
            <Link
              href="/#cases"
              className="inline-flex items-center gap-2 font-semibold text-text-light transition-colors hover:text-[--color-accent-red]"
            >
              Перейти к решениям
              <ArrowRight size={18} />
            </Link>
          </section>
        </div>
      </PageWrapper>
    </>
  );
}
