import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  MonitorUp,
  SearchCheck,
  Settings2,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import CaseMockup from "@/components/CaseMockup";
import { businessCases, getBusinessCase } from "@/businessCases";
import { createPageMetadata } from "@/seo";

export function generateStaticParams() {
  return businessCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const item = getBusinessCase((await params).slug);
  if (!item) return {};

  return createPageMetadata({
    title: item.title,
    description: item.summary,
    path: `/cases/${item.slug}`,
    type: "article",
  });
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const item = getBusinessCase((await params).slug);
  if (!item) notFound();
  const breadcrumbs = {
    "@context": "https://schema.org",
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
        name: item.title,
        item: `https://complexmedia.ru/cases/${item.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PageWrapper title={item.title}>
        <div className="space-y-12 rounded-3xl bg-primary-dark/95 p-4 md:space-y-16 md:p-8">
        <section className="grid gap-8 rounded-2xl border border-white/10 bg-secondary-dark/70 p-7 shadow-lg lg:grid-cols-[1fr_1.3fr] lg:p-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[--color-accent-red]">
              {item.service}
            </p>
            <h2 className="mb-4 text-2xl font-bold text-text-light">
              {item.company}
            </h2>
            <p className="text-lg leading-relaxed text-text-muted">
              {item.summary}
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-primary-dark/50 p-6">
            <h3 className="mb-3 font-semibold text-text-light">
              Бизнес-задача
            </h3>
            <p className="leading-relaxed text-text-muted">{item.challenge}</p>
          </div>
        </section>

        <section>
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Интерфейс решения
              </p>
              <h2 className="text-2xl font-bold text-text-light md:text-3xl">
                Как выглядит рабочий процесс
              </h2>
            </div>
            <Link
              href={`/cases/${item.slug}/demo`}
              target="_blank"
              className="inline-flex items-center gap-2 font-semibold text-text-light transition-colors hover:text-[--color-accent-red]"
            >
              <MonitorUp size={18} />
              Открыть на весь экран
            </Link>
          </div>
          <CaseMockup slug={item.slug} />
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-secondary-dark/60 p-7">
            <div className="mb-5 flex items-center gap-3">
              <Settings2 className="text-[--color-accent-red]" />
              <h2 className="text-2xl font-bold text-text-light">
                Архитектура решения
              </h2>
            </div>
            <ul className="space-y-4">
              {item.solution.map((point) => (
                <li key={point} className="flex gap-3 text-text-muted">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 flex-shrink-0 text-[--color-accent-red]"
                  />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-secondary-dark/60 p-7">
            <div className="mb-5 flex items-center gap-3">
              <SearchCheck className="text-[--color-accent-red]" />
              <h2 className="text-2xl font-bold text-text-light">
                Что автоматизируем
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {item.automation.map((process) => (
                <span
                  key={process}
                  className="rounded-full border border-white/10 bg-primary-dark/60 px-4 py-2 text-sm text-text-muted"
                >
                  {process}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-6 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
              Ожидаемый эффект
            </p>
            <h2 className="text-2xl font-bold text-text-light md:text-3xl">
              Целевые показатели пилота
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {item.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-secondary-dark/60 p-6 text-center"
              >
                <div className="text-2xl font-bold text-[--color-accent-red] md:text-3xl">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm text-text-muted">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-text-muted">
            Точные значения рассчитываются после бизнес-анализа и фиксируются
            для пилотного периода.
          </p>
        </section>

        <section className="rounded-2xl border border-[--color-accent-red]/30 bg-secondary-dark/70 p-8 text-center md:p-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
            Бизнес-анализ
          </p>
          <h2 className="mb-4 text-2xl font-bold text-text-light md:text-3xl">
            {item.auditTitle}
          </h2>
          <p className="mx-auto mb-7 max-w-3xl leading-relaxed text-text-muted">
            {item.auditDescription}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[--color-accent-red] px-6 py-3 font-semibold text-white transition-colors hover:bg-[--color-accent-red-hover]"
          >
            Обсудить бизнес-задачу
            <ArrowRight size={18} />
          </Link>
        </section>
        </div>
      </PageWrapper>
    </>
  );
}
