import type { Metadata } from "next";
import WebDevelopmentContent from "./Content";

export const metadata: Metadata = {
  title: "Разработка сайтов на Next.js | Комплекс Медиа",
  description:
    "Заказать разработку современных, быстрых и адаптивных сайтов под ключ. Создаем лендинги, корпоративные сайты и веб-приложения на Next.js для вашего бизнеса.",
};

export default function WebDevelopmentPage() {
  return <WebDevelopmentContent />;
}
