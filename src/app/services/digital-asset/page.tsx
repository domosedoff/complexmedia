// src/app/services/digital-asset/page.tsx
import type { Metadata } from "next";
import DigitalAssetContent from "./Content"; // Импортируем наш новый файл

export const metadata: Metadata = {
  title: "Корпоративный Цифровой Актив | База Знаний для ИИ",
  description:
    "Разработка архитектуры корпоративной базы знаний. Превращаем хаос в структурированный цифровой актив, готовый к внедрению Искусственного Интеллекта.",
};

export default function DigitalAssetPage() {
  return <DigitalAssetContent />;
}
