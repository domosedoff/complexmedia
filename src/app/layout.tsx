// src/app/layout.tsx
// Убираем 'use client'

import { Suspense } from "react"; // <-- Импортируем Suspense
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metrika } from "@/components/Metrika"; // <-- Импортируем наш компонент

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

// Теперь экспорт metadata снова будет работать!
export const metadata: Metadata = {
  title: "Комплекс Медиа - Сайты, ИИ Боты, ИИ Агенты",
  description:
    "Разработка современных сайтов, интеллектуальных Telegram ботов и ИИ агентов для эффективных коммуникаций вашего бизнеса.",
  // Здесь можно вернуть OG-теги, если вы их убирали
  openGraph: {
    title: "Комплекс Медиа - Сайты, ИИ Боты, ИИ Агенты",
    description:
      "Разработка современных сайтов, интеллектуальных чат ботов и ИИ агентов...",
    url: "https://complexmedia.ru",
    siteName: "Комплекс Медиа",
    images: [
      { url: "https://complexmedia.ru/og-image.png", width: 1200, height: 630 },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Комплекс Медиа - Сайты, ИИ Боты, ИИ Агенты",
    description: "Разработка современных сайтов, интеллектуальных чат ботов...",
    images: ["https://complexmedia.ru/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Убираем всю логику useEffect, usePathname, useSearchParams отсюда

  return (
    <html lang="ru">
      {/* <head> теперь генерируется Next.js из metadata, его можно убрать */}
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />

        {/* --- ОБЕРАЧИВАЕМ ВЫЗОВ МЕТРИКИ В SUSPENSE --- */}
        <Suspense fallback={null}>
          {" "}
          {/* fallback={null} чтобы ничего не показывать во время загрузки */}
          <Metrika />
        </Suspense>
        {/* --- КОНЕЦ ОБЕРТКИ --- */}
      </body>
    </html>
  );
}
