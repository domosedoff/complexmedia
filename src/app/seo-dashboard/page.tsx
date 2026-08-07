import type { Metadata } from "next";
import {
  ArrowUpRight,
  BarChart3,
  Eye,
  Search,
  Users,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import {
  getSeoDashboardData,
  getSeoPeriod,
  latestPosition,
  trackedQueries,
} from "@/seoDashboard";

export const metadata: Metadata = {
  title: "SEO-дашборд ComplexMedia",
  description: "Внутренний мониторинг SEO-показателей complexmedia.ru.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export const dynamic = "force-dynamic";

const reports = [
  {
    name: "Google Search Console",
    description: "Клики, показы, CTR и позиции в Google",
    href: "https://search.google.com/search-console/performance/search-analytics?resource_id=https%3A%2F%2Fcomplexmedia.ru%2F",
  },
  {
    name: "Яндекс Вебмастер",
    description: "Позиции 30 отслеживаемых запросов в Яндексе",
    href: "https://webmaster.yandex.ru/site/https:complexmedia.ru:443/efficiency/queries/?groupId=SELECTED_QUERIES",
  },
  {
    name: "Яндекс Метрика",
    description: "Источники и переходы на сайт",
    href: "https://metrika.yandex.ru/stat/sources?period=month&id=103776627",
  },
] as const;

function formatNumber(value: number | null, digits = 0) {
  return value === null
    ? "—"
    : value.toLocaleString("ru-RU", { maximumFractionDigits: digits });
}

function Position({
  value,
}: {
  value: number | null;
}) {
  if (value === null) return <span className="text-text-muted">—</span>;
  return <span>{formatNumber(value, 1)}</span>;
}

function Delta({ value }: { value: number | null }) {
  if (value === null) return <span className="text-text-muted">—</span>;
  if (value === 0) return <span className="text-text-muted">0</span>;
  return (
    <span className={value > 0 ? "text-emerald-300" : "text-red-300"}>
      {value > 0 ? "↑" : "↓"}
      {formatNumber(Math.abs(value), 1)}
    </span>
  );
}

function dateDaysBefore(end: string, days: number) {
  const date = new Date(`${end}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() - days);
  return date.toISOString().slice(0, 10);
}

export default async function SeoDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ start?: string; end?: string }>;
}) {
  const params = await searchParams;
  const period = getSeoPeriod(params.start, params.end);
  const data = await getSeoDashboardData(period);
  const totalVisits = data.visits ?? 0;
  const lastDayStart = period.end;
  const lastThreeDaysStart = dateDaysBefore(period.end, 2);

  return (
    <PageWrapper title="SEO-дашборд ComplexMedia">
      <main className="mx-auto max-w-7xl space-y-8 rounded-3xl bg-primary-dark/95 p-4 md:p-8">
        <header className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-secondary-dark/70 p-6 shadow-lg lg:flex-row lg:items-end lg:justify-between md:p-8">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[--color-accent-red]">
              Внутренний отчёт
            </p>
            <h2 className="text-2xl font-bold text-text-light md:text-3xl">
              Поиск, трафик и целевые запросы
            </h2>
          </div>
          <form className="grid gap-3 rounded-xl border border-white/10 bg-primary-dark/60 p-4 sm:grid-cols-[1fr_1fr_auto]">
            <label className="text-xs uppercase tracking-wider text-text-muted">
              С
              <input
                type="date"
                name="start"
                defaultValue={period.start}
                max={period.end}
                className="mt-1 block w-full rounded-lg border border-white/10 bg-secondary-dark px-3 py-2 text-sm font-semibold text-text-light"
              />
            </label>
            <label className="text-xs uppercase tracking-wider text-text-muted">
              По
              <input
                type="date"
                name="end"
                defaultValue={period.end}
                min={period.start}
                className="mt-1 block w-full rounded-lg border border-white/10 bg-secondary-dark px-3 py-2 text-sm font-semibold text-text-light"
              />
            </label>
            <button className="self-end rounded-lg bg-[--color-accent-red] px-4 py-2 text-sm font-semibold text-white">
              Показать
            </button>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:col-span-3">
              <span className="text-text-muted">Быстрый период:</span>
              <a
                href={`?start=${lastDayStart}&end=${period.end}`}
                className="rounded-md border border-white/10 px-2 py-1 text-text-light hover:border-[--color-accent-red]/60"
              >
                Последний день
              </a>
              <a
                href={`?start=${lastThreeDaysStart}&end=${period.end}`}
                className="rounded-md border border-white/10 px-2 py-1 text-text-light hover:border-[--color-accent-red]/60"
              >
                Последние 3 дня
              </a>
            </div>
          </form>
        </header>

        <section
          aria-label="Статус API"
          className="flex flex-wrap gap-2 text-xs"
        >
          {Object.entries(data.status).map(([name, status]) => (
            <span
              key={name}
              className={`rounded-full border px-3 py-2 ${
                status.ok
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                  : "border-amber-400/30 bg-amber-400/10 text-amber-200"
              }`}
            >
              {name === "google"
                ? "Google"
                : name === "yandex"
                  ? "Яндекс"
                  : "Метрика"}
              : {status.message}
            </span>
          ))}
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            [BarChart3, data.visits, "визитов"],
            [Users, data.users, "посетителей"],
            [Search, data.searchVisits, "визитов из поиска"],
            [Eye, trackedQueries.length, "отслеживаемых запросов"],
          ].map(([Icon, value, label]) => {
            const CardIcon = Icon as typeof BarChart3;
            return (
              <article
                key={String(label)}
                className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-6"
              >
                <CardIcon
                  className="mb-5 text-[--color-accent-red]"
                  aria-hidden
                />
                <p className="text-3xl font-bold text-text-light">
                  {formatNumber(value as number | null)}
                </p>
                <p className="mt-1 text-text-muted">{String(label)}</p>
                <p className="mt-3 text-xs text-text-muted">
                  {period.start} — {period.end}
                </p>
              </article>
            );
          })}
        </section>

        <section className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-6 md:p-8">
          <h2 className="mb-6 text-xl font-bold text-text-light">
            Источники визитов
          </h2>
          {data.trafficSources.length ? (
            <div className="space-y-5">
              {data.trafficSources.map((source) => (
                <div key={source.name}>
                  <div className="mb-2 flex justify-between gap-4 text-sm">
                    <span className="text-text-muted">{source.name}</span>
                    <span className="font-semibold text-text-light">
                      {formatNumber(source.visits)}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[--color-accent-red]"
                      style={{
                        width: `${Math.max((source.visits / totalVisits) * 100, 1)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-text-muted">За выбранный период данных нет.</p>
          )}
        </section>

        <section className="overflow-hidden rounded-2xl border border-white/10 bg-secondary-dark/70">
          <div className="border-b border-white/10 p-6 md:p-8">
            <h2 className="text-xl font-bold text-text-light">
              Позиции ключевых запросов
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              Показана последняя известная средняя позиция. Стрелка — изменение
              за день или неделю: вверх означает улучшение.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="bg-primary-dark/60 text-text-muted">
                <tr>
                  <th className="px-6 py-4 font-medium">Запрос</th>
                  <th className="px-4 py-4 text-center font-medium">Google</th>
                  <th className="px-4 py-4 text-center font-medium">день</th>
                  <th className="px-4 py-4 text-center font-medium">неделя</th>
                  <th className="px-4 py-4 text-center font-medium">Яндекс</th>
                  <th className="px-4 py-4 text-center font-medium">день</th>
                  <th className="px-4 py-4 text-center font-medium">неделя</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {data.queries.map((result) => {
                  const google = latestPosition(result.google, period.end);
                  const yandex = latestPosition(result.yandex, period.end);
                  return (
                    <tr key={result.query} className="text-text-light">
                      <td className="px-6 py-4 font-medium">{result.query}</td>
                      <td className="px-4 py-4 text-center">
                        <Position value={google.position} />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Delta value={google.day} />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Delta value={google.week} />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Position value={yandex.position} />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Delta value={yandex.day} />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Delta value={yandex.week} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
            <p className="border-t border-white/10 px-6 py-4 text-xs text-text-muted">
            «—» означает отсутствие подтверждённого показа и позиции в данных
            поисковика за выбранный период. Это не нулевая позиция сайта.
            Точная проверка выдачи до первого показа требует отдельного
            rank-tracker и не заменяет данные Search Console/Вебмастера.
          </p>
        </section>

        <section className="overflow-hidden rounded-2xl border border-white/10 bg-secondary-dark/70">
          <div className="border-b border-white/10 p-6 md:p-8">
            <h2 className="text-xl font-bold text-text-light">
              Динамика по дням и поисковикам
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead className="bg-primary-dark/60 text-text-muted">
                <tr>
                  <th className="px-6 py-4 font-medium">Дата</th>
                  <th className="px-6 py-4 font-medium">Google: позиция</th>
                  <th className="px-6 py-4 font-medium">Google: клики</th>
                  <th className="px-6 py-4 font-medium">Яндекс: позиция</th>
                  <th className="px-6 py-4 font-medium">Яндекс: клики</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {data.daily.length ? (
                  data.daily.map((row) => (
                    <tr key={row.date} className="text-text-light">
                      <td className="px-6 py-4">{row.date}</td>
                      <td className="px-6 py-4">
                        {formatNumber(row.googlePosition, 1)}
                      </td>
                      <td className="px-6 py-4">{row.googleClicks}</td>
                      <td className="px-6 py-4">
                        {formatNumber(row.yandexPosition, 1)}
                      </td>
                      <td className="px-6 py-4">{row.yandexClicks}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-8 text-center text-text-muted"
                    >
                      Поисковики ещё не передали дневные данные.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-6 md:p-8">
          <h2 className="text-xl font-bold text-text-light">
            Новые поисковые формулировки
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            Реальные запросы, по которым сайт показывался, но которых ещё нет в
            нашем коммерческом ядре.
          </p>
          {data.discovered.length ? (
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead className="text-text-muted">
                  <tr>
                    <th className="py-3 font-medium">Запрос</th>
                    <th className="py-3 font-medium">Поисковик</th>
                    <th className="py-3 font-medium">Показы</th>
                    <th className="py-3 font-medium">Клики</th>
                    <th className="py-3 font-medium">Позиция</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {data.discovered.map((row) => (
                    <tr key={`${row.engine}-${row.query}`}>
                      <td className="py-3 font-medium text-text-light">
                        {row.query}
                      </td>
                      <td className="py-3 text-text-muted">{row.engine}</td>
                      <td className="py-3 text-text-muted">{row.impressions}</td>
                      <td className="py-3 text-text-muted">{row.clicks}</td>
                      <td className="py-3 text-text-muted">
                        {formatNumber(row.position, 1)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mt-5 rounded-xl border border-white/10 bg-primary-dark/60 p-4 text-text-muted">
              Пока данных нет. Google ещё обрабатывает новый ресурс, а Яндекс
              ещё не зафиксировал показы по запросам.
            </p>
          )}
        </section>

        <section>
          <h2 className="mb-5 text-xl font-bold text-text-light">
            Официальные отчёты
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {reports.map((report) => (
              <a
                key={report.name}
                href={report.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-secondary-dark/70 p-6 transition-colors hover:border-[--color-accent-red]/60"
              >
                <span>
                  <span className="block font-semibold text-text-light">
                    {report.name}
                  </span>
                  <span className="mt-1 block text-sm text-text-muted">
                    {report.description}
                  </span>
                </span>
                <ArrowUpRight
                  className="shrink-0 text-[--color-accent-red]"
                  aria-hidden
                />
              </a>
            ))}
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
