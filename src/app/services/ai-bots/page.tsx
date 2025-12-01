import type { Metadata } from "next";
import AiBotsContent from "./Content";

export const metadata: Metadata = {
  title: "Разработка ИИ Чат-ботов | Комплекс Медиа",
  description:
    "Создание умных чат-ботов на базе ИИ для Telegram, WhatsApp, VK и других платформ. Автоматизация поддержки, продаж и бизнес-процессов.",
};

export default function AiBotsPage() {
  return <AiBotsContent />;
}
