import { Suspense } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  FileText,
  RefreshCw,
  Route,
  Users,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { ServiceNavigation } from "@/components/ServiceNavigation";
import { createPageMetadata } from "@/seo";

export const metadata = createPageMetadata({
  title: "Заказать автоматизацию отдела продаж с ИИ",
  description:
    "Заказать автоматизацию отдела продаж с ИИ: квалификация лидов, подготовка КП, заполнение CRM, контроль следующих шагов и аналитика в едином процессе.",
  path: "/services/ai-sales-automation",
});

const capabilities = [
  {
    icon: Bot,
    title: "Квалификация входящих лидов",
    text: "ИИ уточняет задачу, бюджет и сроки, отвечает на типовые вопросы и передаёт менеджеру структурированное обращение.",
  },
  {
    icon: RefreshCw,
    title: "Автоматическое ведение CRM",
    text: "Заполняет карточки, сохраняет переписку, обновляет статус сделки и ставит следующий шаг без повторного ввода данных.",
  },
  {
    icon: FileText,
    title: "Подготовка предложений",
    text: "Собирает черновик письма или КП по шаблону, данным о клиенте, каталогу, ценам и внутренним правилам компании.",
  },
  {
    icon: Route,
    title: "Контроль воронки",
    text: "Находит забытые обращения, сделки без следующего шага и просроченные задачи, затем готовит напоминание или действие.",
  },
  {
    icon: Users,
    title: "Помощник менеджера",
    text: "Ищет информацию о продукте, подбирает аргументы, резюмирует звонки и готовит ответы с учётом контекста клиента.",
  },
  {
    icon: BarChart3,
    title: "Аналитика для руководителя",
    text: "Собирает сводки по обращениям, причинам отказов, загрузке менеджеров и узким местам воронки.",
  },
];

const steps = [
  ["1. Бизнес-анализ", "Разбираем путь лида, регламенты, источники данных и ручные операции, которые сильнее всего тормозят продажи."],
  ["2. Пилот", "Автоматизируем один измеримый сценарий — например, разбор входящих заявок или подготовку типового КП."],
  ["3. Интеграции", "Подключаем CRM, почту, телефонию, мессенджеры, сайт, базу знаний и учётную систему по доступным API."],
  ["4. Масштабирование", "После проверки KPI добавляем новые сценарии, сохраняя подтверждение менеджера для важных действий."],
];

export default function AiSalesAutomationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Автоматизация отдела продаж с ИИ",
    serviceType: "Внедрение ИИ в продажи",
    provider: {
      "@type": "Organization",
      name: "Комплекс Медиа",
      url: "https://complexmedia.ru",
    },
    areaServed: "RU",
    url: "https://complexmedia.ru/services/ai-sales-automation",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageWrapper
        title="Автоматизация отдела продаж с ИИ"
        showCta
        personalTelegramLink="https://t.me/domosedoff"
        ctaText="Обсудить автоматизацию продаж"
      >
        <Suspense fallback={<div>Загрузка навигации...</div>}>
          <ServiceNavigation />
        </Suspense>

        <div className="space-y-12 md:space-y-20">
          <section className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-8 shadow-lg md:p-10">
            <p className="mb-5 text-xl font-medium leading-relaxed text-text-light md:text-2xl">
              ИИ для отдела продаж берёт на себя повторяющиеся операции между
              первым обращением и следующим шагом по сделке — без замены
              менеджера и без потери контроля.
            </p>
            <p className="mb-7 max-w-4xl leading-relaxed text-text-muted">
              Решение работает с вашими каналами, CRM и корпоративными данными:
              квалифицирует лиды, готовит материалы, фиксирует договорённости и
              вовремя возвращает менеджера к клиенту.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[--color-accent-red] px-6 py-3 font-semibold text-white transition-colors hover:bg-[--color-accent-red-hover]"
            >
              Заказать автоматизацию продаж с ИИ
              <ArrowRight size={18} />
            </Link>
          </section>

          <section>
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Возможности
              </p>
              <h2 className="text-3xl font-bold text-text-light">
                Что можно автоматизировать в отделе продаж
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
                Один процесс вместо набора разрозненных инструментов
              </h2>
              <div className="space-y-4">
                {[
                  "Обращения с сайта, почты, телефонии и мессенджеров",
                  "Квалификация и поиск данных в базе знаний",
                  "Карточка сделки, задача и следующий шаг в CRM",
                  "Черновик ответа, расчёта или коммерческого предложения",
                  "Контроль сроков и сводка для руководителя",
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
                Целевые KPI пилота
              </p>
              <div className="space-y-5">
                {[
                  ["до 5 мин.", "первичная обработка обращения"],
                  ["10–15 мин.", "подготовка типового КП"],
                  ["90–95%", "заполненность карточек CRM"],
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
                Значения уточняются после анализа процесса и фиксируются как
                измеримые показатели пилота.
              </p>
            </div>
          </section>

          <section>
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Внедрение
              </p>
              <h2 className="text-3xl font-bold text-text-light">
                Как запускаем ИИ-автоматизацию продаж
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
              Посмотрите пример ИИ-контура для B2B-продаж
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-text-muted">
              В типовом сценарии ИИ объединяет консультацию, подбор решения,
              данные ERP, подготовку КП и передачу сделки менеджеру.
            </p>
            <Link
              href="/cases/equipment-sales"
              className="inline-flex items-center gap-2 font-semibold text-text-light transition-colors hover:text-[--color-accent-red]"
            >
              Открыть решение
              <ArrowRight size={18} />
            </Link>
            <div className="mt-4">
              <Link
                href="/articles/ai-for-sales"
                className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted transition-colors hover:text-[--color-accent-red]"
              >
                Руководство по ИИ для отдела продаж
                <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        </div>
      </PageWrapper>
    </>
  );
}
