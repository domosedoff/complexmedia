"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  CirclePlay,
  LoaderCircle,
  Send,
} from "lucide-react";

type TrackerWindow = Window & {
  ym?: (...args: unknown[]) => void;
};

const platformTelegramHref =
  "https://t.me/domosedoff?utm_source=ai-platform&utm_medium=site&utm_campaign=demo";

const track = (event: string) => {
  if (typeof window === "undefined") return;
  (window as TrackerWindow).ym?.(103776627, "reachGoal", event);
};

interface TrackedLinkProps {
  href: string;
  event?: string;
  children: React.ReactNode;
  className?: string;
  target?: "_blank";
  rel?: string;
}

export const TrackedLink = ({
  href,
  event,
  children,
  className,
  target,
  rel,
}: TrackedLinkProps) => (
  <a
    href={href}
    target={target}
    rel={rel}
    className={className}
    onClick={() => event && track(event)}
  >
    {children}
  </a>
);

export const PlatformPreview = ({ compact = false }: { compact?: boolean }) => (
  <div
    className={`overflow-hidden rounded-2xl border border-white/15 bg-[#101214] shadow-2xl ${
      compact ? "p-3" : "p-4 md:p-5"
    }`}
    role="img"
    aria-label="Демонстрационный интерфейс платформы ИИ Harness"
  >
    <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3 text-xs text-text-muted">
      <span className="font-semibold text-text-light">ИИ Harness для бизнеса</span>
      <span className="rounded-full border border-[--color-accent-red]/50 px-2 py-1 text-[10px] uppercase tracking-wider text-[--color-accent-red]">
        Demo
      </span>
    </div>
    <div className="grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-2 rounded-xl border border-white/10 bg-[#191c20] p-3">
        <p className="text-[10px] uppercase tracking-wider text-text-muted">Команда</p>
        {["Поддержка", "Продажи", "HR", "Руководитель"].map((item, index) => (
          <div
            key={item}
            className={`flex items-center gap-2 rounded-lg px-2 py-2 text-xs ${
              index === 0 ? "bg-[--color-accent-red]/15 text-text-light" : "text-text-muted"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                index === 0 ? "bg-[--color-accent-red]" : "bg-white/25"
              }`}
            />
            {item}
          </div>
        ))}
      </div>
      <div className="space-y-3 rounded-xl border border-white/10 bg-[#191c20] p-3">
        <div className="flex items-center gap-2 text-xs text-text-light">
          <BookOpenCheck size={15} className="text-[--color-accent-red]" />
          Ответ по базе знаний
        </div>
        <p className="text-xs leading-relaxed text-text-muted">
          Регламент найден в разрешённой версии документа. Источник и дата обновления
          доступны руководителю.
        </p>
        <div className="flex flex-wrap gap-2 text-[10px] text-text-muted">
          <span className="rounded-full bg-white/5 px-2 py-1">Источник: Wiki</span>
          <span className="rounded-full bg-white/5 px-2 py-1">Версия 2.4</span>
          <span className="rounded-full bg-white/5 px-2 py-1">Аудит включён</span>
        </div>
      </div>
    </div>
  </div>
);

const demoSteps = [
  {
    title: "Запрос сотрудника",
    text: "Менеджер спрашивает, как обработать нестандартный запрос клиента.",
  },
  {
    title: "Поиск по знаниям",
    text: "Цифровой сотрудник находит регламент и проверяет актуальную версию.",
  },
  {
    title: "Проверяемый ответ",
    text: "Ответ формируется по инструкции и содержит ссылку на источник.",
  },
  {
    title: "Контроль руководителя",
    text: "Сложный случай передаётся человеку, а история действия сохраняется.",
  },
];

const progressEvents: Record<number, string> = {
  1: "ai_platform_demo_25",
  2: "ai_platform_demo_50",
  3: "ai_platform_demo_75",
  4: "ai_platform_demo_complete",
};

export const PlatformDemo = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const event = progressEvents[step];
    if (event) track(event);
  }, [step]);

  useEffect(() => {
    if (!isPlaying) return;
    if (step >= demoSteps.length) {
      setIsPlaying(false);
      return;
    }

    const timer = window.setTimeout(() => setStep((current) => current + 1), 900);
    return () => window.clearTimeout(timer);
  }, [isPlaying, step]);

  const startDemo = () => {
    track("ai_platform_demo_click");
    setStep(1);
    setIsPlaying(true);
  };

  const activeStep = demoSteps[Math.max(step - 1, 0)];

  return (
    <section id="demo" className="scroll-mt-28 rounded-2xl border border-white/10 bg-secondary-dark/80 p-6 shadow-xl md:p-10">
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
            Интерактивное демо
          </p>
          <h2 className="text-3xl font-bold text-text-light md:text-4xl">
            Посмотрите, как корпоративные знания превращаются в рабочий результат
          </h2>
        </div>
        <button
          type="button"
          onClick={startDemo}
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[--color-accent-red] px-5 py-3 font-semibold text-white transition-colors hover:bg-[--color-accent-red-hover]"
        >
          <CirclePlay size={19} />
          {isPlaying ? "Демонстрация запущена" : "Запустить демонстрацию"}
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <PlatformPreview />
          <div className="mt-4 flex items-center justify-between text-xs text-text-muted">
            <span>Демонстрационный сценарий, без звука</span>
            <span>{Math.min(step, demoSteps.length) * 25}%</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[--color-accent-red] transition-all duration-500"
              style={{ width: `${Math.min(step, demoSteps.length) * 25}%` }}
            />
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-primary-dark/70 p-5">
          <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-text-muted">
            Текстовая расшифровка
          </p>
          <div className="space-y-3">
            {demoSteps.map((item, index) => (
              <div
                key={item.title}
                className={`flex gap-3 rounded-lg p-3 text-sm transition-colors ${
                  step > index ? "bg-[--color-accent-red]/10 text-text-light" : "text-text-muted"
                }`}
              >
                {step > index ? (
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[--color-accent-red]" />
                ) : (
                  <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-white/20 text-[10px]">
                    {index + 1}
                  </span>
                )}
                <div>
                  <p className="font-semibold">{item.title}</p>
                  {step > index && <p className="mt-1 leading-relaxed text-text-muted">{item.text}</p>}
                </div>
              </div>
            ))}
          </div>
          {step > 0 && (
            <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-text-muted" aria-live="polite">
              {activeStep.text}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-sm leading-relaxed text-text-muted">
          Демонстрация выполнена на обезличенных материалах. В реальном проекте набор
          знаний, роли, доступы и сценарии настраиваются под конкретную компанию.
        </p>
        <TrackedLink
          href="#demo-request"
          event="ai_platform_cta_click"
          className="inline-flex shrink-0 items-center gap-2 font-semibold text-text-light hover:text-[--color-accent-red]"
        >
          Обсудить такой сценарий <ArrowRight size={18} />
        </TrackedLink>
      </div>
    </section>
  );
};

interface DemoRequestFormProps {
  telegramHref?: string;
}

export const DemoRequestForm = ({ telegramHref = platformTelegramHref }: DemoRequestFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const startedRef = useRef(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [utm, setUtm] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtm({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
    });
  }, []);

  const markFormStart = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      track("ai_platform_form_start");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setStatusMessage("");

    const formData = new FormData(event.currentTarget);
    if (!formData.has("privacy-consent")) {
      setStatus("error");
      setStatusMessage("Необходимо согласиться с Политикой конфиденциальности.");
      track("ai_platform_form_error");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        setStatusMessage(result.error || "Не удалось отправить заявку. Попробуйте ещё раз.");
        track("ai_platform_form_error");
        return;
      }

      setStatus("success");
      setStatusMessage("Заявка получена. Мы свяжемся с вами и предложим сценарий демонстрации.");
      track("ai_platform_form_submit");
      formRef.current?.reset();
    } catch {
      setStatus("error");
      setStatusMessage("Не удалось связаться с сервером. Попробуйте ещё раз.");
      track("ai_platform_form_error");
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-secondary-dark/80 p-6 shadow-xl md:p-10">
      <div className="mb-8 max-w-3xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
          Заявка на демонстрацию
        </p>
        <h2 className="text-3xl font-bold text-text-light md:text-4xl">
          Покажем, как ИИ Harness может работать в вашем процессе
        </h2>
        <p className="mt-4 leading-relaxed text-text-muted">
          Опишите регулярную задачу, которая отнимает время у команды. Мы предложим
          сценарий демонстрации на обезличенных материалах.
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} onFocus={markFormStart} className="grid gap-5 md:grid-cols-2">
        <input type="hidden" name="service" value="ИИ Harness для бизнеса" />
        {Object.entries(utm).map(([key, value]) => (
          <input key={key} type="hidden" name={key} value={value} />
        ))}
        <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="ai-platform-website">Сайт</label>
          <input id="ai-platform-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <label className="text-sm text-text-muted">
          Имя <span className="text-[--color-accent-red]">*</span>
          <input name="name" required maxLength={100} className="mt-2 w-full rounded-lg border border-white/15 bg-primary-dark px-4 py-3 text-text-light outline-none transition focus:border-[--color-accent-red]" />
        </label>
        <label className="text-sm text-text-muted">
          Компания <span className="text-[--color-accent-red]">*</span>
          <input name="company" required maxLength={200} className="mt-2 w-full rounded-lg border border-white/15 bg-primary-dark px-4 py-3 text-text-light outline-none transition focus:border-[--color-accent-red]" />
        </label>
        <label className="text-sm text-text-muted">
          Рабочая почта или Telegram <span className="text-[--color-accent-red]">*</span>
          <input name="contactInfo" required maxLength={200} placeholder="name@company.ru или @username" className="mt-2 w-full rounded-lg border border-white/15 bg-primary-dark px-4 py-3 text-text-light outline-none transition focus:border-[--color-accent-red]" />
        </label>
        <label className="text-sm text-text-muted">
          Должность или роль
          <input name="role" maxLength={120} placeholder="Например, руководитель продаж" className="mt-2 w-full rounded-lg border border-white/15 bg-primary-dark px-4 py-3 text-text-light outline-none transition focus:border-[--color-accent-red]" />
        </label>
        <label className="text-sm text-text-muted md:col-span-2">
          Какую задачу хотите автоматизировать? <span className="text-[--color-accent-red]">*</span>
          <textarea name="message" required maxLength={5000} rows={5} placeholder="Опишите повторяющийся процесс, документы или вопросы команды" className="mt-2 w-full resize-y rounded-lg border border-white/15 bg-primary-dark px-4 py-3 text-text-light outline-none transition focus:border-[--color-accent-red]" />
        </label>

        <div className="flex items-start gap-3 text-xs text-text-muted md:col-span-2">
          <input id="ai-platform-privacy-consent" name="privacy-consent" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-[--color-accent-red]" />
          <label htmlFor="ai-platform-privacy-consent">
            Нажимая кнопку, я даю согласие на обработку персональных данных в соответствии с{" "}
            <Link href="/privacy-policy" target="_blank" className="underline hover:text-text-light">
              Политикой конфиденциальности
            </Link>
            .
          </label>
        </div>

        <div className="flex flex-col gap-4 md:col-span-2 sm:flex-row sm:items-center">
          <button type="submit" disabled={status === "submitting"} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[--color-accent-red] px-6 py-3 font-semibold text-white transition-colors hover:bg-[--color-accent-red-hover] disabled:cursor-not-allowed disabled:opacity-60">
            {status === "submitting" ? <LoaderCircle size={18} className="animate-spin" /> : <Send size={18} />}
            {status === "submitting" ? "Отправляем…" : "Обсудить пилот"}
          </button>
          <TrackedLink
            href={telegramHref}
            target="_blank"
            rel="noopener noreferrer"
            event="ai_platform_telegram_click"
            className="inline-flex items-center gap-2 font-semibold text-text-light hover:text-[--color-accent-red]"
          >
            Написать в Telegram <ArrowRight size={18} />
          </TrackedLink>
        </div>

        {statusMessage && (
          <p className={`text-sm md:col-span-2 ${status === "success" ? "text-green-400" : "text-red-400"}`} role="status" aria-live="polite">
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <details
    className="group rounded-xl border border-white/10 bg-secondary-dark/60 p-5"
    onToggle={(event) => event.currentTarget.open && track("ai_platform_faq_open")}
  >
    <summary className="cursor-pointer list-none pr-6 font-semibold text-text-light marker:hidden group-open:text-[--color-accent-red]">
      {question}
    </summary>
    <p className="mt-3 leading-relaxed text-text-muted">{answer}</p>
  </details>
);

export { platformTelegramHref };
