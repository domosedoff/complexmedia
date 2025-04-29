// src/components/homepage/PortfolioPreviewSection.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Layers } from "lucide-react";

interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface PortfolioPreviewSectionProps {
  portfolioPreview: PortfolioItem[];
}

const PortfolioPreviewSection: React.FC<PortfolioPreviewSectionProps> = ({
  portfolioPreview,
}) => {
  return (
    <section
      id="portfolio-preview"
      className="bg-secondary-dark/70 backdrop-blur-sm py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-light mb-6">
          Наши Работы
        </h2>
        <p className="text-center text-text-muted max-w-2xl mx-auto mb-12 md:mb-16">
          Здесь представлены некоторые из наших проектов. Мы постоянно работаем
          над новыми интересными задачами, включая сложных AI-агентов и ботов.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioPreview.map((item, index) => (
            <div
              key={index}
              className="bg-primary-dark rounded-lg overflow-hidden shadow-lg border border-white/10 group"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-text-light mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted mb-4 line-clamp-2">
                  {item.description}
                </p>
                {/* <Link href={item.link} className="text-sm text-[--color-accent-red] hover:underline">
                  Узнать больше
                </Link> */}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Смотреть все проекты
            <Layers size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreviewSection;
