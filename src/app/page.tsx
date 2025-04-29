// src/app/page.tsx
import Link from "next/link";
import Image from "next/image"; // Добавляем Image для превью проекта
// Иконки для услуг и кнопок
import {
  ArrowRight,
  BotMessageSquare,
  CodeXml,
  BrainCircuit,
} from "lucide-react";
// Иконки для преимуществ
import {
  Zap,
  Target,
  ShieldCheck,
  TrendingUp,
  Users,
  BadgePercent,
} from "lucide-react";
// Иконки для этапов работы
import {
  MessageSquareText,
  FileText,
  PencilRuler,
  Code,
  TestTubeDiagonal,
  Rocket,
  LifeBuoy,
} from "lucide-react";
// Иконка для портфолио
import { Layers } from "lucide-react";

export default function Home() {
  const telegramBotLink = "#"; // ЗАМЕНИТЕ на вашу ссылку TG бота

  // Данные для услуг
  const services = [
    {
      icon: CodeXml,
      title: "Разработка Сайтов",
      description:
        "Создаем современные, адаптивные и быстрые сайты – от лендингов до сложных веб-приложений, которые решают задачи вашего бизнеса.",
      link: "/services/web-development",
    },
    {
      icon: BotMessageSquare,
      title: "AI Telegram Боты",
      description:
        "Разрабатываем умных Telegram ботов с использованием AI для автоматизации поддержки, продаж, сбора лидов и других задач 24/7.",
      link: "/services/ai-bots",
    },
    {
      icon: BrainCircuit,
      title: "Разработка AI Агентов",
      description:
        "Проектируем и внедряем автономных AI агентов для анализа данных, автоматизации сложных процессов и создания интеллектуальных ассистентов.",
      link: "/services/ai-agents",
    },
  ];

  // Данные для преимуществ
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

  // Данные для этапов работы
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

  // Данные для превью портфолио (пока один проект + заглушки)
  const portfolioPreview = [
    {
      title: "Название Вашего Проекта Сайта", // ЗАМЕНИТЕ НА РЕАЛЬНОЕ НАЗВАНИЕ
      description: "Краткое описание задачи и решения для этого сайта.", // ЗАМЕНИТЕ
      imageUrl: "/portfolio-site-preview.jpg", // ЗАМЕНИТЕ на скриншот вашего сайта в /public
      link: "/portfolio/your-site-project", // ЗАМЕНИТЕ на ссылку на кейс (если будет)
    },
    {
      title: "Пример AI Telegram Бота",
      description:
        "Демонстрация возможностей бота для автоматизации клиентской поддержки или продаж.",
      imageUrl: "/portfolio-bot-placeholder.jpg", // ЗАМЕНИТЕ на плейсхолдер или схему
      link: "/portfolio/example-ai-bot",
    },
    {
      title: "Концепт AI Агента",
      description:
        "Пример использования AI агента для анализа данных или автономного выполнения задач.",
      imageUrl: "/portfolio-agent-placeholder.jpg", // ЗАМЕНИТЕ на плейсхолдер или схему
      link: "/portfolio/example-ai-agent",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center text-center overflow-hidden px-4 bg-secondary-dark/70 backdrop-blur-sm">
        <div className="container mx-auto z-10">
          {/* ... код контента Hero ... */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-4 leading-tight">
            Комплекс Медиа: Сайты, AI-Боты и Агенты – Ваши{" "}
            <span className="text-[--color-accent-red]">
              Эффективные Коммуникации
            </span>{" "}
            в Цифре.
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-8">
            Превращаем технологии в результат. Автоматизируйте рутину,
            привлекайте клиентов и общайтесь эффективно с помощью наших сайтов,
            умных ботов и автономных AI-агентов. Начните ваш проект прямо
            сейчас!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href={telegramBotLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
            >
              Начать брифинг в Telegram
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-[--color-text-muted] hover:text-[--color-text-light] font-medium py-3 px-8 rounded-lg transition-colors duration-300 border border-[--color-text-muted]/50 hover:border-[--color-text-light]"
            >
              Другие способы связи
            </Link>
          </div>
        </div>
      </section>

      {/* --- Секция Услуги --- */}
      <section id="services" className="container mx-auto px-4 py-20 md:py-28">
        {/* ... код секции Услуги ... */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-light mb-12 md:mb-16">
          Наши Услуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-secondary-dark/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/10 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4 text-[--color-accent-red]">
                <service.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-text-light mb-3">
                {service.title}
              </h3>
              <p className="text-text-muted mb-6 flex-grow">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <Link
                  href={service.link}
                  className="inline-block text-sm text-[--color-accent-red] hover:text-[--color-accent-red-hover] font-medium py-2 px-4 rounded transition-colors border border-[--color-accent-red]/50 hover:border-[--color-accent-red]"
                >
                  Подробнее
                </Link>
                <Link
                  href={telegramBotLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm bg-[--color-accent-red]/10 hover:bg-[--color-accent-red]/20 text-[--color-accent-red] font-medium py-2 px-4 rounded transition-colors"
                >
                  Создать ТЗ (Бот)
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Секция Преимущества ("Почему мы?") --- */}
      <section className="bg-secondary-dark/70 backdrop-blur-sm py-20 md:py-28">
        <div className="container mx-auto px-4">
          {/* ... код секции Преимущества ... */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text-light mb-12 md:mb-16">
            Почему выбирают Комплекс Медиа?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 text-[--color-accent-red] mt-1">
                  <advantage.icon size={28} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-light mb-1">
                    {advantage.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Секция Этапы работы --- */}
      <section className="container mx-auto px-4 py-20 md:py-28">
        {/* ... код секции Этапы работы ... */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-light mb-12 md:mb-16">
          Как мы работаем
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[--color-accent-red]/30 transform -translate-x-1/2"></div>
          {workStages.map((stage, index) => (
            <div
              key={index}
              className={`mb-12 md:mb-8 flex md:items-center w-full relative ${
                // Добавили relative для мобильной точки/линии
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="w-full md:w-5/12 px-4 py-6 bg-secondary-dark/60 backdrop-blur-sm rounded-lg shadow-lg border border-white/10 ml-8 md:ml-0">
                {" "}
                {/* Добавили ml-8 на мобильных */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-[--color-accent-red]">
                    <stage.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-text-light">
                    {stage.title}
                  </h3>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  {stage.description}
                </p>
              </div>
              <div className="hidden md:flex w-2/12 justify-center items-center relative">
                <div className="absolute z-10 w-4 h-4 rounded-full bg-[--color-accent-red] border-2 border-secondary-dark"></div>
                <div
                  className={`absolute w-full h-0.5 bg-[--color-accent-red]/30 ${
                    index % 2 === 0 ? "right-1/2" : "left-1/2"
                  }`}
                ></div>
              </div>
              <div className="hidden md:block w-5/12"></div>
              {/* Линия и точка для мобильных (позиционируются абсолютно относительно родителя) */}
              <div className="md:hidden absolute left-0 top-0 h-full flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[--color-accent-red] border-2 border-secondary-dark mt-[22px] flex-shrink-0"></div>{" "}
                {/* Точка */}
                {index < workStages.length - 1 && (
                  <div className="w-0.5 bg-[--color-accent-red]/30 h-full mt-2"></div> /* Линия */
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Секция Портфолио (Превью/Заглушка) --- */}
      <section
        id="portfolio-preview"
        className="bg-secondary-dark/70 backdrop-blur-sm py-20 md:py-28"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text-light mb-6">
            Наши Работы
          </h2>
          <p className="text-center text-text-muted max-w-2xl mx-auto mb-12 md:mb-16">
            Здесь представлены некоторые из наших проектов. Мы постоянно
            работаем над новыми интересными задачами, включая сложных AI-агентов
            и ботов.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioPreview.map((item, index) => (
              <div
                key={index}
                className="bg-primary-dark rounded-lg overflow-hidden shadow-lg border border-white/10 group"
              >
                {/* Изображение */}
                <div className="relative h-48 w-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110" // Эффект зума при наведении на карточку
                  />
                  {/* Легкое затемнение для текста поверх */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                {/* Текстовый контент */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-text-light mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-4 line-clamp-2">
                    {item.description}
                  </p>{" "}
                  {/* line-clamp-2 ограничивает двумя строками */}
                  {/* Можно добавить ссылку "Подробнее", если есть куда вести */}
                  {/* <Link href={item.link} className="text-sm text-[--color-accent-red] hover:underline">
                    Узнать больше
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
          {/* Кнопка на полную страницу портфолио */}
          <div className="text-center">
            <Link
              href="/portfolio" // Ссылка на будущую страницу портфолио
              className="inline-flex items-center justify-center gap-2 bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Смотреть все проекты
              <Layers size={20} /> {/* Иконка */}
            </Link>
          </div>
        </div>
      </section>

      {/* --- Финальный CTA --- */}
      <section className="container mx-auto px-4 py-20 md:py-28 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-6 max-w-3xl mx-auto">
          Готовы начать проект или обсудить идею?
        </h2>
        <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto">
          Давайте создадим эффективное решение для ваших задач. Начните брифинг
          в Telegram или свяжитесь с нами удобным способом.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href={telegramBotLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
          >
            Начать брифинг в Telegram
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-[--color-text-muted] hover:text-[--color-text-light] font-medium py-3 px-8 rounded-lg transition-colors duration-300 border border-[--color-text-muted]/50 hover:border-[--color-text-light]"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </>
  );
}
