import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { createPageMetadata } from "@/seo";

export const metadata = createPageMetadata({
  title: "Статьи об ИИ для бизнеса и автоматизации",
  description:
    "Практические материалы Комплекс Медиа о внедрении ИИ, автоматизации продаж, корпоративных базах знаний, ИИ-агентах и чат-ботах.",
  path: "/articles",
});

const articles = [
  {
    href: "/articles/ai-implementation-business",
    label: "Внедрение ИИ",
    title: "Внедрение ИИ в бизнес: этапы, стоимость и выбор первого процесса",
    description:
      "Как выбрать задачу, подготовить данные, запустить ограниченный пилот и измерить результат.",
  },
  {
    href: "/articles/ai-for-sales",
    label: "Продажи",
    title: "ИИ для отдела продаж: квалификация лидов, CRM и контроль сделок",
    description:
      "Какие операции можно автоматизировать и по каким KPI оценивать пилот в отделе продаж.",
  },
  {
    href: "/articles/corporate-knowledge-base",
    label: "База знаний",
    title: "Корпоративная база знаний: документы и ИИ-поиск",
    description:
      "Как собрать документы, настроить структуру, версии, права доступа и поиск со ссылками на источники.",
  },
  {
    href: "/articles/ai-agent-vs-chatbot",
    label: "Выбор решения",
    title: "ИИ-агент или ИИ-чат-бот: что выбрать для задач компании",
    description:
      "Сравнение решений по самостоятельности, интеграциям, рискам и сценарию безопасного пилота.",
  },
];

export default function ArticlesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Статьи об ИИ для бизнеса",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: article.title,
      url: `https://complexmedia.ru${article.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageWrapper title="Статьи об ИИ для бизнеса">
        <div className="mx-auto max-w-6xl space-y-10 rounded-3xl bg-primary-dark/95 p-4 md:p-8">
          <header className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-7 shadow-lg md:p-10">
            <p className="max-w-4xl text-xl font-medium leading-relaxed text-text-light md:text-2xl">
              Практические руководства по выбору ИИ-решений, подготовке
              процессов и данных, запуску пилотов и оценке результата.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <article
                key={article.href}
                className="flex flex-col rounded-2xl border border-white/10 bg-secondary-dark/70 p-7 shadow-lg"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                  {article.label}
                </p>
                <h2 className="mb-4 text-2xl font-bold leading-tight text-text-light">
                  {article.title}
                </h2>
                <p className="mb-6 flex-1 leading-relaxed text-text-muted">
                  {article.description}
                </p>
                <Link
                  href={article.href}
                  className="inline-flex items-center gap-2 font-semibold text-text-light transition-colors hover:text-[--color-accent-red]"
                >
                  Читать статью
                  <ArrowRight size={18} />
                </Link>
              </article>
            ))}
          </div>

          <section className="rounded-2xl border border-[--color-accent-red]/30 bg-secondary-dark/70 p-7 text-center md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-text-light">
              Нужен план внедрения для вашей компании?
            </h2>
            <p className="mx-auto mb-7 max-w-2xl text-text-muted">
              Разберём процессы, выберем первый сценарий и определим показатели
              пилота.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[--color-accent-red] px-6 py-3 font-semibold text-white transition-colors hover:bg-[--color-accent-red-hover]"
            >
              Обсудить задачу
              <ArrowRight size={18} />
            </Link>
          </section>
        </div>
      </PageWrapper>
    </>
  );
}
