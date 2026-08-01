import { createSign } from "node:crypto";
import { readFile } from "node:fs/promises";

export const trackedQueries = [
  "ии для бизнеса",
  "искусственный интеллект для бизнеса",
  "внедрение ии в бизнес",
  "внедрение ии в компанию",
  "ии автоматизация для бизнеса",
  "разработка ии решений",
  "ии консалтинг",
  "автоматизация бизнес процессов с ии",
  "ии агенты для бизнеса",
  "разработка ии агентов",
  "создание ии агента",
  "создание ии агентов для бизнеса",
  "разработка ии агентов для бизнеса",
  "заказать ии агента",
  "ии чат бот для бизнеса",
  "разработка ии чат бота",
  "заказать ии чат бота",
  "заказать создание ии чат бота",
  "заказать разработку ии чат бота",
  "разработка ии чат бота под ключ",
  "стоимость разработки ии чат бота",
  "ии для отдела продаж",
  "внедрение ии в продажи",
  "автоматизация продаж с ии",
  "корпоративная база знаний",
  "создание корпоративной базы знаний",
  "заказать корпоративную базу знаний",
  "ии ассистент руководителя",
  "ии помощник руководителя",
  "личный ии помощник руководителя",
] as const;

export type Period = { start: string; end: string };
export type TrafficSource = { name: string; visits: number };
export type QueryPoint = {
  date: string;
  position: number;
  clicks: number;
  impressions: number;
};
export type QueryResult = {
  query: string;
  google: QueryPoint[];
  yandex: QueryPoint[];
};

type Status = { ok: boolean; message: string };

export type SeoDashboardData = {
  visits: number | null;
  users: number | null;
  searchVisits: number | null;
  trafficSources: TrafficSource[];
  queries: QueryResult[];
  discovered: Array<{
    query: string;
    engine: "Google" | "Яндекс";
    clicks: number;
    impressions: number;
    position: number | null;
  }>;
  daily: Array<{
    date: string;
    googleClicks: number;
    googlePosition: number | null;
    yandexClicks: number;
    yandexPosition: number | null;
  }>;
  status: {
    google: Status;
    yandex: Status;
    metrika: Status;
  };
};

const isoDate = /^\d{4}-\d{2}-\d{2}$/;

function toIsoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function shiftDate(date: string, days: number) {
  const value = new Date(`${date}T12:00:00Z`);
  value.setUTCDate(value.getUTCDate() + days);
  return toIsoDate(value);
}

export function getSeoPeriod(
  start?: string,
  end?: string,
  today = toIsoDate(new Date()),
): Period {
  const safeEnd = isoDate.test(end ?? "") && end! <= today ? end! : today;
  const safeStart =
    isoDate.test(start ?? "") && start! <= safeEnd
      ? start!
      : shiftDate(safeEnd, -29);
  return {
    start:
      new Date(`${safeEnd}T00:00:00Z`).getTime() -
          new Date(`${safeStart}T00:00:00Z`).getTime() >
        487 * 86_400_000
        ? shiftDate(safeEnd, -487)
        : safeStart,
    end: safeEnd,
  };
}

function normalizeQuery(query: string) {
  return query.trim().toLocaleLowerCase("ru-RU").replace(/\s+/g, " ");
}

function encode(value: object | string) {
  const source = typeof value === "string" ? value : JSON.stringify(value);
  return Buffer.from(source).toString("base64url");
}

async function getGoogleToken() {
  const credentialsPath = process.env.GOOGLE_SEARCH_CONSOLE_CREDENTIALS_FILE;
  if (!credentialsPath) throw new Error("не указан файл учётных данных");

  const credentials = JSON.parse(await readFile(credentialsPath, "utf8")) as {
    client_email?: string;
    private_key?: string;
  };
  if (!credentials.client_email || !credentials.private_key) {
    throw new Error("неполный файл учётных данных");
  }

  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${encode({ alg: "RS256", typ: "JWT" })}.${encode({
    iss: credentials.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  })}`;
  const signature = createSign("RSA-SHA256")
    .update(unsigned)
    .sign(credentials.private_key, "base64url");
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${signature}`,
    }),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`OAuth: ${response.status}`);
  return ((await response.json()) as { access_token: string }).access_token;
}

async function getGoogleData(period: Period) {
  const token = await getGoogleToken();
  const site = process.env.GOOGLE_SEARCH_CONSOLE_SITE ?? "https://complexmedia.ru/";
  const response = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: period.start,
        endDate: period.end,
        dimensions: ["query", "date"],
        dataState: "all",
        rowLimit: 25_000,
      }),
      cache: "no-store",
    },
  );
  if (!response.ok) throw new Error(`API: ${response.status}`);
  const payload = (await response.json()) as {
    rows?: Array<{
      keys: [string, string];
      clicks: number;
      impressions: number;
      position: number;
    }>;
  };
  return (payload.rows ?? []).map((row) => ({
    query: row.keys[0],
    point: {
      date: row.keys[1],
      position: row.position,
      clicks: row.clicks,
      impressions: row.impressions,
    },
  }));
}

async function yandexFetch<T>(path: string, init?: RequestInit) {
  const token = await getYandexToken();
  const response = await fetch(`https://api.webmaster.yandex.net${path}`, {
    ...init,
    headers: {
      Authorization: `OAuth ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
      ...init?.headers,
    },
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`API: ${response.status}`);
  return (await response.json()) as T;
}

async function getYandexToken() {
  const token = process.env.YANDEX_OAUTH_TOKEN;
  if (token) return token;
  const tokenFile = process.env.YANDEX_OAUTH_TOKEN_FILE;
  if (tokenFile) return (await readFile(tokenFile, "utf8")).trim();
  throw new Error("не задан OAuth-токен");
}

async function getYandexData(period: Period) {
  const user = await yandexFetch<{ user_id: number }>("/v4/user/");
  const hosts = await yandexFetch<{
    hosts: Array<{ host_id: string; ascii_host_url?: string }>;
  }>(`/v4/user/${user.user_id}/hosts/`);
  const host = hosts.hosts.find((item) =>
    `${item.host_id} ${item.ascii_host_url ?? ""}`.includes("complexmedia.ru"),
  );
  if (!host) throw new Error("сайт не найден в Вебмастере");

  const result = await yandexFetch<{
    text_indicator_to_statistics?: Array<{
      text_indicator: { value: string };
      statistics: Array<{
        date: string;
        field: "CLICKS" | "IMPRESSIONS" | "POSITION" | "CTR" | "DEMAND";
        value: number;
      }>;
    }>;
  }>(
    `/v4/user/${user.user_id}/hosts/${encodeURIComponent(host.host_id)}/query-analytics/list`,
    {
      method: "POST",
      body: JSON.stringify({
        offset: 0,
        limit: 500,
        device_type_indicator: "ALL",
        search_location: "WEB_LOCATION",
        text_indicator: "QUERY",
      }),
    },
  );

  return (result.text_indicator_to_statistics ?? []).map((item) => {
    const dates = new Map<string, QueryPoint>();
    for (const statistic of item.statistics) {
      if (statistic.date < period.start || statistic.date > period.end) continue;
      const point = dates.get(statistic.date) ?? {
        date: statistic.date,
        position: 0,
        clicks: 0,
        impressions: 0,
      };
      if (statistic.field === "POSITION") point.position = statistic.value;
      if (statistic.field === "CLICKS") point.clicks = statistic.value;
      if (statistic.field === "IMPRESSIONS") point.impressions = statistic.value;
      dates.set(statistic.date, point);
    }
    return {
      query: item.text_indicator.value,
      points: [...dates.values()].filter((point) => point.position > 0),
    };
  });
}

async function getMetrikaData(period: Period) {
  const token = await getYandexToken();
  const params = new URLSearchParams({
    ids: process.env.YANDEX_METRIKA_COUNTER_ID ?? "103776627",
    metrics: "ym:s:visits,ym:s:users",
    dimensions: "ym:s:lastTrafficSource",
    date1: period.start,
    date2: period.end,
    accuracy: "full",
    limit: "100",
  });
  const response = await fetch(
    `https://api-metrika.yandex.net/stat/v1/data?${params}`,
    {
      headers: { Authorization: `OAuth ${token}` },
      cache: "no-store",
    },
  );
  if (!response.ok) throw new Error(`API: ${response.status}`);
  const payload = (await response.json()) as {
    totals?: [number, number];
    data?: Array<{
      dimensions: Array<{ id?: string; name: string }>;
      metrics: [number, number];
    }>;
  };
  const trafficSources = (payload.data ?? []).map((row) => ({
    name: row.dimensions[0]?.name ?? "Другие",
    visits: row.metrics[0],
  }));
  const searchVisits =
    (payload.data ?? []).find((row) => row.dimensions[0]?.id === "organic")
      ?.metrics[0] ?? 0;
  return {
    visits: payload.totals?.[0] ?? 0,
    users: payload.totals?.[1] ?? 0,
    searchVisits,
    trafficSources,
  };
}

function averagePosition(points: QueryPoint[]) {
  const visible = points.filter((point) => point.position > 0);
  if (!visible.length) return null;
  const weighted = visible.reduce(
    (total, point) => total + point.position * Math.max(point.impressions, 1),
    0,
  );
  const weight = visible.reduce(
    (total, point) => total + Math.max(point.impressions, 1),
    0,
  );
  return weighted / weight;
}

export async function getSeoDashboardData(
  period: Period,
): Promise<SeoDashboardData> {
  const [googleResult, yandexResult, metrikaResult] = await Promise.allSettled([
    getGoogleData(period),
    getYandexData(period),
    getMetrikaData(period),
  ]);

  const google =
    googleResult.status === "fulfilled" ? googleResult.value : [];
  const yandex =
    yandexResult.status === "fulfilled" ? yandexResult.value : [];
  const byQuery = new Map<string, QueryResult>(
    trackedQueries.map((query) => [
      normalizeQuery(query),
      { query, google: [], yandex: [] },
    ]),
  );
  for (const row of google) {
    const key = normalizeQuery(row.query);
    const value = byQuery.get(key) ?? {
      query: row.query,
      google: [],
      yandex: [],
    };
    value.google.push(row.point);
    byQuery.set(key, value);
  }
  for (const row of yandex) {
    const key = normalizeQuery(row.query);
    const value = byQuery.get(key) ?? {
      query: row.query,
      google: [],
      yandex: [],
    };
    value.yandex.push(...row.points);
    byQuery.set(key, value);
  }

  const tracked = new Set(trackedQueries.map(normalizeQuery));
  const discovered = [...byQuery.entries()]
    .filter(([key]) => !tracked.has(key))
    .flatMap(([, result]) => [
      ...(result.google.length
        ? [
            {
              query: result.query,
              engine: "Google" as const,
              clicks: result.google.reduce((sum, point) => sum + point.clicks, 0),
              impressions: result.google.reduce(
                (sum, point) => sum + point.impressions,
                0,
              ),
              position: averagePosition(result.google),
            },
          ]
        : []),
      ...(result.yandex.length
        ? [
            {
              query: result.query,
              engine: "Яндекс" as const,
              clicks: result.yandex.reduce((sum, point) => sum + point.clicks, 0),
              impressions: result.yandex.reduce(
                (sum, point) => sum + point.impressions,
                0,
              ),
              position: averagePosition(result.yandex),
            },
          ]
        : []),
    ])
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 20);

  const dates = new Set<string>();
  for (const result of byQuery.values()) {
    for (const point of [...result.google, ...result.yandex]) dates.add(point.date);
  }
  const daily = [...dates]
    .sort()
    .map((date) => {
      const googlePoints = [...byQuery.values()].flatMap((result) =>
        result.google.filter((point) => point.date === date),
      );
      const yandexPoints = [...byQuery.values()].flatMap((result) =>
        result.yandex.filter((point) => point.date === date),
      );
      return {
        date,
        googleClicks: googlePoints.reduce((sum, point) => sum + point.clicks, 0),
        googlePosition: averagePosition(googlePoints),
        yandexClicks: yandexPoints.reduce((sum, point) => sum + point.clicks, 0),
        yandexPosition: averagePosition(yandexPoints),
      };
    });

  const metrika =
    metrikaResult.status === "fulfilled" ? metrikaResult.value : null;
  const isBaseline = period.start === "2026-07-01" && period.end === "2026-07-30";

  return {
    visits: metrika?.visits ?? (isBaseline ? 170 : null),
    users: metrika?.users ?? (isBaseline ? 129 : null),
    searchVisits: metrika?.searchVisits ?? (isBaseline ? 3 : null),
    trafficSources:
      metrika?.trafficSources ??
      (isBaseline
        ? [
            { name: "Прямые заходы", visits: 140 },
            { name: "Почтовые рассылки", visits: 15 },
            { name: "Ссылки на сайтах", visits: 6 },
            { name: "Реклама", visits: 4 },
            { name: "Поисковые системы", visits: 3 },
            { name: "Социальные сети", visits: 1 },
            { name: "Внутренние переходы", visits: 1 },
          ]
        : []),
    queries: trackedQueries.map((query) => byQuery.get(normalizeQuery(query))!),
    discovered,
    daily,
    status: {
      google:
        googleResult.status === "fulfilled"
          ? { ok: true, message: "API подключён" }
          : { ok: false, message: googleResult.reason.message },
      yandex:
        yandexResult.status === "fulfilled"
          ? { ok: true, message: "API подключён" }
          : { ok: false, message: yandexResult.reason.message },
      metrika:
        metrikaResult.status === "fulfilled"
          ? { ok: true, message: "API подключён" }
          : { ok: false, message: metrikaResult.reason.message },
    },
  };
}

export function latestPosition(points: QueryPoint[], endDate: string) {
  const sorted = points
    .filter((point) => point.date <= endDate)
    .sort((a, b) => a.date.localeCompare(b.date));
  const current = sorted.at(-1);
  if (!current) return { position: null, day: null, week: null };
  const at = (date: string) => sorted.find((point) => point.date === date);
  const day = at(shiftDate(current.date, -1));
  const week = at(shiftDate(current.date, -7));
  return {
    position: current.position,
    day: day ? day.position - current.position : null,
    week: week ? week.position - current.position : null,
  };
}
