// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Убедитесь, что этот импорт есть и он правильный
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter", // Эта переменная будет подхвачена Tailwind v4
});

export const metadata: Metadata = {
  title: "Комплекс Медиа - Сайты, AI Боты, AI Агенты",
  description:
    "Разработка современных сайтов, интеллектуальных Telegram ботов и AI агентов для эффективных коммуникаций вашего бизнеса.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      {/* Переменная шрифта применяется здесь, Tailwind ее подхватит */}
      {/* Базовые bg-primary-dark и text-text-light теперь применяются через globals.css */}
      <body className={`${inter.variable} font-sans`}>
        <Header />
        {/* Отступ для фиксированного хедера. 20 * 4 = 80px (h-20 в хедере) */}
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
