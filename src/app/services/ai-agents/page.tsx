import AiAgentsContent from "./Content";
import { createPageMetadata } from "@/seo";

export const metadata = createPageMetadata({
  title: "Разработка ИИ-агентов для бизнеса",
  description:
    "Создаём ИИ-агентов и личных помощников руководителя для работы с почтой, документами, CRM, задачами, аналитикой и корпоративными данными.",
  path: "/services/ai-agents",
});

export default function AiAgentsPage() {
  return <AiAgentsContent />;
}
