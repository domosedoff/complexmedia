// src/app/layout.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const YM_COUNTER_ID = 103776627;

declare global {
  interface Window {
    ym: (...args: unknown[]) => void;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    if (typeof window.ym === "function") {
      window.ym(YM_COUNTER_ID, "hit", url);
    }
  }, [pathname, searchParams]);

  // --- ДАННЫЕ ДЛЯ МЕТА-ТЕГОВ ---
  const siteUrl = "https://complexmedia.ru"; // ЗАМЕНИТЕ на ваш домен, когда будет готов
  const title = "Комплекс Медиа - Сайты, AI Боты, AI Агенты";
  const description =
    "Разработка современных сайтов, интеллектуальных Telegram ботов и AI агентов для эффективных коммуникаций вашего бизнеса.";
  const ogImageUrl = `${siteUrl}/og-image.png`; // Путь к вашей OG-картинке в /public
  // --- КОНЕЦ ДАННЫХ ---

  return (
    <html lang="ru">
      <head>
        {/* Основные мета-теги */}
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* --- OPEN GRAPH И TWITTER ТЕГИ --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Комплекс Медиа" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImageUrl} />
        {/* --- КОНЕЦ OG И TWITTER ТЕГОВ --- */}

        {/* --- FAVICON И ИКОНКИ --- */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* --- КОНЕЦ FAVICON --- */}
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />

        {/* --- КОД ЯНДЕКС.МЕТРИКИ --- */}
        {process.env.NODE_ENV === "production" && (
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
        )}
        {/* --- КОНЕЦ КОДА ЯНДЕКС.МЕТРИКИ --- */}
      </body>
    </html>
  );
}
