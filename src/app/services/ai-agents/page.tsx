import AiAgentsContent from "./Content";
import { createPageMetadata } from "@/seo";

export const metadata = createPageMetadata({
  title: "Заказать ИИ-агента для бизнеса — разработка под ключ",
  description:
    "Заказать ИИ-агента для бизнеса: проектируем и внедряем ИИ-агентов и личных помощников руководителя для почты, документов, CRM, задач и аналитики.",
  path: "/services/ai-agents",
});

export default function AiAgentsPage() {
  return <AiAgentsContent />;
}
