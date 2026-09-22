import Link from "next/link";
import { ArrowRight, BookOpenCheck, CheckCircle2, ShieldCheck } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { ServiceNavigation } from "@/components/ServiceNavigation";
import { CommercialSeoLinks } from "@/components/CommercialSeoLinks";
import type { SolutionPage } from "@/solutionPages";

const knowledgePoints = [
  "Документы, инструкции, FAQ и каталоги собраны в единую рабочую структуру.",
  "Версии, владельцы и права доступа помогают поддерживать знания актуальными.",
  "ИИ-агент сначала ищет ответ в разрешённых источниках, а не заполняет пробелы догадками.",
  "Ответ, черновик или действие можно передать сотруднику, если нужен контроль или исключение.",
];

export function SolutionLandingPage({ solution }: { solution: SolutionPage }) {
  const url = `https://complexmedia.ru/solutions/${solution.slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    description: solution.description,
    url,
    provider: {
      "@type": "Organization",
      name: "Комплекс Медиа",
      url: "https://complexmedia.ru",
      telephone: "+74951085316",
    },
    areaServed: { "@type": "Country", name: "Россия" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageWrapper title={solution.title} showCta personalTelegramLink="/contact" ctaText="Обсудить решение">
        <ServiceNavigation />

        <div className="space-y-12 md:space-y-20">
          <section className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-8 shadow-lg md:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[--color-accent-red]">
              {solution.eyebrow}
            </p>
            <p className="max-w-4xl text-xl font-semibold leading-relaxed text-text-light md:text-2xl">
              {solution.lead}
            </p>
            <p className="mt-5 max-w-4xl leading-relaxed text-text-muted">{solution.audience}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[--color-accent-red] px-6 py-3 font-semibold text-white transition-colors hover:bg-[--color-accent-red-hover]">
                Обсудить пилот <ArrowRight size={18} />
              </Link>
              <a href="tel:+74951085316" className="text-sm text-text-muted hover:text-text-light">+7 (495) 108-53-16</a>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]" aria-labelledby="knowledge-base">
            <div className="rounded-2xl border border-[--color-accent-red]/30 bg-secondary-dark/70 p-8 md:p-10">
              <BookOpenCheck size={38} className="mb-5 text-[--color-accent-red]" />
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">Общий фундамент</p>
              <h2 id="knowledge-base" className="text-2xl font-bold text-text-light md:text-3xl">Корпоративная база знаний, которой удобно управлять</h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                На нашей платформе база знаний — не архив файлов, а рабочий слой для команды и AI-агентов. Вы управляете материалами, версиями и доступами, а агенты используют эту основу при формировании ответов и выполнении задач.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-8 md:p-10">
              <div className="space-y-5">
                {knowledgePoints.map((point) => (
                  <div key={point} className="flex gap-3 text-text-muted">
                    <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-[--color-accent-red]" />
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex gap-3 rounded-xl border border-white/10 bg-primary-dark/40 p-4">
                <ShieldCheck size={22} className="mt-0.5 flex-shrink-0 text-[--color-accent-red]" />
                <p className="text-sm leading-relaxed text-text-muted">Сначала источник и правило, затем ответ или действие — так автоматизация остаётся проверяемой.</p>
              </div>
            </div>
          </section>

          <section aria-labelledby="outcomes">
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">Что получает команда</p>
              <h2 id="outcomes" className="text-3xl font-bold text-text-light md:text-4xl">Практический результат внедрения</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {solution.outcomes.map((outcome) => (
                <div key={outcome} className="flex gap-3 rounded-xl border border-white/10 bg-secondary-dark/70 p-5">
                  <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-[--color-accent-red]" />
                  <span className="leading-relaxed text-text-muted">{outcome}</span>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="scenarios">
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">Сценарии</p>
              <h2 id="scenarios" className="text-3xl font-bold text-text-light md:text-4xl">Где это работает</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {solution.scenarios.map(({ title, text }) => (
                <article key={title} className="rounded-xl border border-white/10 bg-secondary-dark/70 p-6">
                  <h3 className="mb-3 text-lg font-semibold text-text-light">{title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-8 md:p-10" aria-labelledby="process">
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">Как начинаем</p>
              <h2 id="process" className="text-3xl font-bold text-text-light md:text-4xl">От задачи к управляемому пилоту</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {solution.steps.map(({ title, text }) => (
                <article key={title}>
                  <h3 className="mb-2 text-lg font-semibold text-text-light">{title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="faq">
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">FAQ</p>
              <h2 id="faq" className="text-3xl font-bold text-text-light md:text-4xl">Частые вопросы</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {solution.faq.map(({ question, answer }) => (
                <article key={question} className="rounded-xl border border-white/10 bg-secondary-dark/70 p-6">
                  <h3 className="mb-3 text-lg font-semibold text-text-light">{question}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{answer}</p>
                </article>
              ))}
            </div>
          </section>

          <CommercialSeoLinks
            title="Связанные решения Комплекс Медиа"
            text="Подберём первый сценарий, приведём корпоративные знания в рабочий вид и покажем, как AI-агент использует их для ответов и задач."
            links={solution.related}
            ctaLabel="Обсудить задачу"
          />
        </div>
      </PageWrapper>
    </>
  );
}
