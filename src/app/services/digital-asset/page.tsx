// src/app/services/digital-asset/page.tsx
import DigitalAssetContent from "./Content"; // Импортируем наш новый файл
import { createPageMetadata } from "@/seo";

export const metadata = createPageMetadata({
  title: "Корпоративная база знаний и цифровой актив",
  description:
    "Создаём корпоративную базу знаний: структурируем документы, управляем версиями и доступом, подключаем точный ИИ-поиск со ссылками на источники.",
  path: "/services/digital-asset",
});

export default function DigitalAssetPage() {
  return <DigitalAssetContent />;
}
