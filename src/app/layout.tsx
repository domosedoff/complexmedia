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
  metadataBase: new URL("https://complexmedia.ru"),
  title: {
    default: "Внедрение ИИ в бизнес — Комплекс Медиа",
    template: "%s | Комплекс Медиа",
  },
  description:
    "Внедряем ИИ в бизнес: разрабатываем ИИ-чат-ботов, ИИ-агентов, личных помощников и корпоративные базы знаний, автоматизируем продажи и рутинные процессы.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Внедрение ИИ в бизнес — Комплекс Медиа",
    description:
      "ИИ-чат-боты, ИИ-агенты, корпоративные базы знаний и автоматизация бизнес-процессов.",
    url: "/",
    siteName: "Комплекс Медиа",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Внедрение ИИ в бизнес — Комплекс Медиа",
    description:
      "ИИ-чат-боты, ИИ-агенты, корпоративные базы знаний и автоматизация бизнес-процессов.",
    images: ["/og-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://complexmedia.ru/#organization",
      name: "Комплекс Медиа",
      url: "https://complexmedia.ru",
      logo: "https://complexmedia.ru/logo_01.png",
      email: "info@complexmedia.ru",
    },
    {
      "@type": "WebSite",
      "@id": "https://complexmedia.ru/#website",
      url: "https://complexmedia.ru",
      name: "Комплекс Медиа",
      inLanguage: "ru-RU",
      publisher: { "@id": "https://complexmedia.ru/#organization" },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
