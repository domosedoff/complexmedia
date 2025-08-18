// src/components/Metrika.tsx
"use client"; // Этот компонент клиентский

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

const YM_COUNTER_ID = 103776627;

declare global {
  interface Window {
    ym: (...args: unknown[]) => void;
  }
}

export const Metrika = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Отслеживаем изменения URL
  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    if (typeof window.ym === "function") {
      window.ym(YM_COUNTER_ID, "hit", url);
    }
  }, [pathname, searchParams]);

  // Рендерим скрипт только в продакшене
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
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
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${YM_COUNTER_ID}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};
