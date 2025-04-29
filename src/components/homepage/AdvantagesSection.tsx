// src/components/homepage/AdvantagesSection.tsx
import React from "react";
import { LucideProps } from "lucide-react";

interface Advantage {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
}

interface AdvantagesSectionProps {
  advantages: Advantage[];
}

const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({
  advantages,
}) => {
  return (
    <section className="bg-secondary-dark/70 backdrop-blur-sm py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-light mb-12 md:mb-16">
          Почему выбирают нас?
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
  );
};

export default AdvantagesSection;
