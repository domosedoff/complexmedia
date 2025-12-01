import type { Metadata } from "next";
import AiAgentsContent from "./Content";

export const metadata: Metadata = {
  title: "Разработка ИИ Агентов | Комплекс Медиа",
  description:
    "Проектирование автономных ИИ агентов для автоматизации сложных задач, анализа данных и управления процессами.",
};

export default function AiAgentsPage() {
  return <AiAgentsContent />;
}
