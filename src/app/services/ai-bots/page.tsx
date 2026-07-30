import AiBotsContent from "./Content";
import { createPageMetadata } from "@/seo";

export const metadata = createPageMetadata({
  title: "Заказать разработку ИИ-чат-бота для бизнеса",
  description:
    "Разработка ИИ-чат-ботов для бизнеса под ключ: сайт и мессенджеры, консультации 24/7, квалификация обращений, запись, поддержка и интеграция с CRM.",
  path: "/services/ai-bots",
});

export default function AiBotsPage() {
  return <AiBotsContent />;
}
