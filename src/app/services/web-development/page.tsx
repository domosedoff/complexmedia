import WebDevelopmentContent from "./Content";
import { createPageMetadata } from "@/seo";

export const metadata = createPageMetadata({
  title: "Разработка сайтов на Next.js под ключ",
  description:
    "Разрабатываем быстрые адаптивные сайты на Next.js под ключ: лендинги, корпоративные сайты и веб-приложения для задач бизнеса.",
  path: "/services/web-development",
});

export default function WebDevelopmentPage() {
  return <WebDevelopmentContent />;
}
