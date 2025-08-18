// src/app/portfolio/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";
// import { Layers } from 'lucide-react'; // --- УДАЛЕНО ---
import { ArrowRight } from "lucide-react"; // Импортируем ArrowRight для кнопки

export default function PortfolioPage() {
  const telegramBotLink = "#"; // ЗАМЕНИТЕ

  const portfolioItems = [
    {
      title: "Название Вашего Проекта Сайта", // ЗАМЕНИТЕ
      description:
        "Краткое описание задачи и решения для этого сайта. Можно чуть подробнее, чем на главной.", // ЗАМЕНИТЕ
      imageUrl: "/portfolio-site-preview.jpg", // ЗАМЕНИТЕ на путь к скриншоту в /public
      tags: ["Веб-разработка", "Next.js", "Дизайн"],
      link: "#",
    },
    {
      title: "Пример AI Telegram Бота",
      description:
        "Демонстрация возможностей бота для автоматизации клиентской поддержки или продаж. Использованы технологии X и Y.",
      imageUrl: "/portfolio-bot-placeholder.jpg", // ЗАМЕНИТЕ
      tags: ["AI", "Telegram Бот", "Python"],
      link: "#",
    },
    {
      title: "Концепт AI Агента",
      description:
        "Пример использования AI агента для анализа данных или автономного выполнения задач с использованием Langchain.",
      imageUrl: "/portfolio-agent-placeholder.jpg", // ЗАМЕНИТЕ
      tags: ["AI", "Автономные агенты", "Langchain"],
      link: "#",
    },
    // {
    //   title: 'Еще один проект',
    //   description: 'Описание еще одного проекта.',
    //   imageUrl: '/placeholder-image.jpg',
    //   tags: ['Тег1', 'Тег2'],
    //   link: '#',
    // },
  ];

  return (
    <PageWrapper
      title="Портфолио"
      showCta={true}
      telegramBotLink={telegramBotLink}
    >
      <p className="text-center text-lg text-text-muted mb-12 md:mb-16 max-w-3xl mx-auto -mt-4 md:-mt-6">
        Здесь собраны примеры наших работ, демонстрирующие наш опыт в
        веб-разработке и применении искусственного интеллекта для создания
        эффективных решений.
      </p>

      {portfolioItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-secondary-dark/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-white/10 group flex flex-col"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-text-light mb-2">
                  {item.title}
                </h3>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary-dark text-text-muted text-xs font-medium px-2 py-0.5 rounded border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-sm text-text-muted mb-4 flex-grow">
                  {item.description}
                </p>
                {item.link && item.link !== "#" && (
                  <div className="mt-auto pt-3">
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1.5 text-sm text-[--color-accent-red] hover:text-[--color-accent-red-hover] font-medium group/link"
                    >
                      Смотреть детали
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-text-muted py-10">
          Примеры работ скоро появятся здесь. Следите за обновлениями!
        </p>
      )}
    </PageWrapper>
  );
}
