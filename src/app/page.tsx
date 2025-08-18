// src/app/page.tsx
// Импорты компонентов секций
import HeroSection from "@/components/homepage/HeroSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import AdvantagesSection from "@/components/homepage/AdvantagesSection";
import WorkStagesSection from "@/components/homepage/WorkStagesSection";
// import PortfolioPreviewSection from "@/components/homepage/PortfolioPreviewSection"; // Закомментировано
import FinalCtaSection from "@/components/homepage/FinalCtaSection";
import { AnimatedSectionWrapper } from "@/components/AnimatedSectionWrapper";

// Импорты иконок для данных
import { BotMessageSquare, CodeXml, BrainCircuit } from "lucide-react";
import {
  Zap,
  Target,
  ShieldCheck,
  TrendingUp,
  Users,
  BadgePercent,
} from "lucide-react";
import {
  MessageSquareText,
  FileText,
  PencilRuler,
  Code,
  TestTubeDiagonal,
  Rocket,
  LifeBuoy,
} from "lucide-react";

export default function Home() {
  // --- НАСТРОЙКА ССЫЛОК ---
  const telegramBotLink = "https://t.me/complexmedia_bot"; // Ваша ссылка на бота
  const personalTelegramLink = "https://t.me/domosedoff"; // !!! ЗАМЕНИТЕ НА ВАШУ ЛИЧНУЮ ССЫЛКУ !!!
  // --- КОНЕЦ НАСТРОЙКИ ---

  // --- ОБНОВЛЕННЫЙ МАССИВ УСЛУГ ---
  const services = [
    {
      icon: CodeXml,
      title: "Разработка Сайтов",
      description:
        "Создаем современные, адаптивные и быстрые сайты – от лендингов до сложных веб-приложений, которые решают задачи вашего бизнеса.",
      link: "/services/web-development",
      ctaText: "Создать ТЗ", // Текст для кнопки
      ctaLink: telegramBotLink, // Ссылка на бота
    },
    {
      icon: BotMessageSquare,
      title: "AI Telegram Боты",
      description:
        "Разрабатываем умных Telegram ботов с использованием AI для автоматизации поддержки, продаж, сбора лидов и других задач 24/7.",
      link: "/services/ai-bots",
      ctaText: "Обсудить проект", // Другой текст
      ctaLink: personalTelegramLink, // Ссылка на личный TG
    },
    {
      icon: BrainCircuit,
      title: "Разработка AI Агентов",
      description:
        "Проектируем и внедряем автономных AI агентов для анализа данных, автоматизации сложных процессов и создания интеллектуальных ассистентов.",
      link: "/services/ai-agents",
      ctaText: "Обсудить проект", // Другой текст
      ctaLink: personalTelegramLink, // Ссылка на личный TG
    },
  ];
  // --- КОНЕЦ ОБНОВЛЕНИЯ МАССИВА ---

  const advantages = [
    {
      icon: Target,
      title: "Экспертиза в AI и Вебе",
      description:
        "Глубокое понимание как современных веб-технологий, так и передовых AI-решений для создания действительно умных продуктов.",
    },
    {
      icon: Zap,
      title: "Современный Тех. Стек",
      description:
        "Используем Next.js, Python, AI-фреймворки и облачные платформы для производительности, масштабируемости и надежности.",
    },
    {
      icon: Users,
      title: "Индивидуальный Подход",
      description:
        "Вникаем в ваши бизнес-цели, чтобы предложить кастомизированное решение, максимально эффективно решающее ваши задачи.",
    },
    {
      icon: BadgePercent,
      title: "Оптимальная Стоимость",
      description:
        "Предлагаем конкурентное ценообразование и прозрачные сметы, делая передовые технологии доступными.",
    },
    {
      icon: ShieldCheck,
      title: "Качество и Надежность",
      description:
        "Уделяем особое внимание качеству кода, тестированию и безопасности для стабильной работы ваших решений.",
    },
    {
      icon: TrendingUp,
      title: "Фокус на Результат",
      description:
        "Наша цель – не просто сдать проект, а помочь вам достичь конкретных бизнес-результатов через эффективные цифровые коммуникации.",
    },
  ];
  const workStages = [
    {
      icon: MessageSquareText,
      title: "1. Брифинг / Обсуждение",
      description:
        "Начинаем со сбора требований. Вы можете заполнить бриф в нашем Telegram боте или обсудить проект с нами напрямую.",
    },
    {
      icon: FileText,
      title: "2. Планирование / ТЗ",
      description:
        "Анализируем требования, составляем детальный план работ, техническое задание и прозрачную смету.",
    },
    {
      icon: PencilRuler,
      title: "3. Дизайн / Прототип (если нужно)",
      description:
        "Разрабатываем пользовательский интерфейс (UI) и опыт (UX), создаем интерактивные прототипы для согласования.",
    },
    {
      icon: Code,
      title: "4. Разработка",
      description:
        "Пишем чистый, эффективный код, реализуем функционал согласно ТЗ, используя современные технологии.",
    },
    {
      icon: TestTubeDiagonal,
      title: "5. Тестирование",
      description:
        "Тщательно проверяем работоспособность, производительность и безопасность на разных устройствах и сценариях.",
    },
    {
      icon: Rocket,
      title: "6. Запуск / Внедрение",
      description:
        "Развертываем готовый продукт на хостинге, проводим финальную настройку и передаем вам доступы.",
    },
    {
      icon: LifeBuoy,
      title: "7. Поддержка (опционально)",
      description:
        "Предлагаем услуги по дальнейшей поддержке, обновлению и развитию вашего проекта после запуска.",
    },
  ];

  /* // Портфолио временно отключено
  const portfolioPreview = [
    {
      title: "Название Вашего Проекта Сайта",
      description: "Краткое описание задачи и решения для этого сайта.",
      imageUrl: "/portfolio-site-preview.jpg",
      link: "/portfolio/your-site-project",
    },
    {
      title: "Пример AI Telegram Бота",
      description:
        "Демонстрация возможностей бота для автоматизации клиентской поддержки или продаж.",
      imageUrl: "/portfolio-bot-placeholder.jpg",
      link: "/portfolio/example-ai-bot",
    },
    {
      title: "Концепт AI Агента",
      description:
        "Пример использования AI агента для анализа данных или автономного выполнения задач.",
      imageUrl: "/portfolio-agent-placeholder.jpg",
      link: "/portfolio/example-ai-agent",
    },
  ];
  */

  return (
    <>
      <HeroSection
        telegramBotLink={telegramBotLink}
        personalTelegramLink={personalTelegramLink}
      />

      <AnimatedSectionWrapper amount={0.2}>
        {/* Убираем telegramBotLink из пропсов, передаем только services */}
        <ServicesSection services={services} />
      </AnimatedSectionWrapper>

      <AnimatedSectionWrapper amount={0.2}>
        <AdvantagesSection advantages={advantages} />
      </AnimatedSectionWrapper>

      <AnimatedSectionWrapper amount={0.1}>
        <WorkStagesSection workStages={workStages} />
      </AnimatedSectionWrapper>

      {/* Секция портфолио закомментирована */}
      {/*
      <AnimatedSectionWrapper amount={0.2}>
        <PortfolioPreviewSection portfolioPreview={portfolioPreview} />
      </AnimatedSectionWrapper>
      */}

      <AnimatedSectionWrapper amount={0.2}>
        <FinalCtaSection
          telegramBotLink={telegramBotLink}
          personalTelegramLink={personalTelegramLink}
        />
      </AnimatedSectionWrapper>
    </>
  );
}
