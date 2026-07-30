"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import Link from "next/link";

const YM_COUNTER_ID = 103776627;
const CONSENT_KEY = "complexmedia_analytics_consent";
type Consent = "accepted" | "rejected";

declare global {
  interface Window {
    ym: (...args: unknown[]) => void;
  }
}

export const Metrika = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [consent, setConsent] = useState<Consent | null>();

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);
    setConsent(saved === "accepted" || saved === "rejected" ? saved : null);
  }, []);

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    if (consent === "accepted" && typeof window.ym === "function") {
      window.ym(YM_COUNTER_ID, "hit", url);
    }
  }, [consent, pathname, searchParams]);

  const saveConsent = (value: Consent) => {
    localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  };

  return (
    <>
      {process.env.NODE_ENV === "production" && consent === "accepted" && (
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
          (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(${YM_COUNTER_ID}, 'init', {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
          });
        `}
        </Script>
      )}

      {consent === null && (
        <aside
          role="dialog"
          aria-label="Настройки аналитики"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-4xl rounded-xl border border-white/15 bg-secondary-dark p-5 shadow-2xl md:flex md:items-center md:gap-6"
        >
          <p className="mb-4 text-sm leading-relaxed text-text-muted md:mb-0 md:flex-1">
            Мы используем Яндекс Метрику и файлы cookie, чтобы анализировать
            посещаемость и улучшать сайт. Метрика включится только с вашего
            согласия. Подробнее — в{" "}
            <Link
              href="/privacy-policy"
              className="text-text-light underline hover:text-[--color-accent-red]"
            >
              политике конфиденциальности
            </Link>
            .
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => saveConsent("rejected")}
              className="rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-text-light transition-colors hover:border-white"
            >
              Отклонить
            </button>
            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="rounded-lg bg-[--color-accent-red] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[--color-accent-red-hover]"
            >
              Разрешить
            </button>
          </div>
        </aside>
      )}
    </>
  );
};
