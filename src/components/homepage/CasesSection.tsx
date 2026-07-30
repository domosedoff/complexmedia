import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Database,
  SearchCheck,
  Workflow,
} from "lucide-react";
import { businessCases } from "@/businessCases";

const caseIcons = [Bot, Database, Workflow, BrainCircuit, SearchCheck];

export default function CasesSection() {
  return (
    <section id="cases" className="bg-primary-dark/95 py-20 md:py-28">
      <div className="container mx-auto px-4">
      <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[--color-accent-red]">
          Кейсы автоматизации
        </p>
        <h2 className="mb-5 text-3xl font-bold text-text-light md:text-4xl">
          Как ИИ решает задачи среднего бизнеса
        </h2>
        <p className="text-lg leading-relaxed text-text-muted">
          ИИ может не только консультировать клиентов. Он работает с
          документами, почтой, CRM, календарями, отчётами и корпоративными
          знаниями — при необходимости оставляя важные действия на подтверждении
          сотрудника.
        </p>
      </div>

      <div className="mb-12 rounded-2xl border border-[--color-accent-red]/30 bg-secondary-dark/70 p-7 shadow-lg md:p-9">
        <div className="grid gap-7 lg:grid-cols-[1.1fr_1.9fr] lg:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
              Сначала — бизнес-аудит
            </p>
            <h3 className="text-2xl font-bold text-text-light">
              Ищем узкие места до выбора технологии
            </h3>
          </div>
          <div>
            <div className="grid gap-4 text-sm text-text-muted sm:grid-cols-3">
              <AuditStep number="01" text="Интервью и карта ключевых процессов" />
              <AuditStep number="02" text="Поиск потерь времени и ручных операций" />
              <AuditStep number="03" text="Приоритеты по эффекту и сложности запуска" />
            </div>
            <Link
              href="/services/ai-consulting"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-text-light transition-colors hover:text-[--color-accent-red]"
            >
              Подробнее об ИИ-консалтинге
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {businessCases.map((item, index) => {
          const Icon = caseIcons[index];
          return (
            <article
              key={item.slug}
              className="group flex flex-col rounded-2xl border border-white/10 bg-secondary-dark/60 p-7 shadow-lg transition-colors hover:border-[--color-accent-red]/50"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="rounded-xl bg-[--color-accent-red]/10 p-3 text-[--color-accent-red]">
                  <Icon size={28} strokeWidth={1.7} />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-text-muted">
                  {item.service}
                </span>
              </div>
              <p className="mb-2 text-sm font-medium text-[--color-accent-red]">
                {item.company}
              </p>
              <h3 className="mb-3 text-xl font-semibold text-text-light">
                {item.title}
              </h3>
              <p className="mb-6 flex-grow leading-relaxed text-text-muted">
                {item.summary}
              </p>
              <div className="mb-6 grid grid-cols-2 gap-3">
                {item.metrics.slice(0, 2).map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-white/5 bg-primary-dark/50 p-3"
                  >
                    <div className="font-semibold text-text-light">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-xs text-text-muted">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={`/cases/${item.slug}`}
                className="inline-flex items-center gap-2 font-semibold text-text-light transition-colors hover:text-[--color-accent-red]"
              >
                Посмотреть решение
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </article>
          );
        })}
      </div>
      </div>
    </section>
  );
}

function AuditStep({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex gap-3">
      <span className="font-semibold text-[--color-accent-red]">{number}</span>
      <span>{text}</span>
    </div>
  );
}
