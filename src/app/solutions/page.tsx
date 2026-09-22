import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { solutionPages } from "@/solutionPages";

export const metadata: Metadata = {
  title: "Решения с корпоративной базой знаний и AI-агентами | Комплекс Медиа",
  description: "Коммерческие решения Комплекс Медиа: корпоративная база знаний, AI-агенты для продаж, поддержки, руководителя и голосовых обращений.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <PageWrapper title="Решения для бизнеса на базе ИИ">
      <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed text-text-muted">
        Единая управляемая корпоративная база знаний становится основой для AI-агентов, которые отвечают клиентам, помогают сотрудникам и выполняют рабочие задачи по правилам компании.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {solutionPages.map((solution) => (
          <article key={solution.slug} className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-7 shadow-lg">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">{solution.eyebrow}</p>
            <h2 className="mb-3 text-2xl font-bold text-text-light">{solution.title}</h2>
            <p className="leading-relaxed text-text-muted">{solution.description}</p>
            <Link href={`/solutions/${solution.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-text-light hover:text-[--color-accent-red]">
              Открыть решение <ArrowRight size={18} />
            </Link>
          </article>
        ))}
      </div>
    </PageWrapper>
  );
}
