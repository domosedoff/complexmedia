// src/components/homepage/WorkStagesSection.tsx
import React from "react";
import { LucideProps } from "lucide-react";

interface WorkStage {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
}

interface WorkStagesSectionProps {
  workStages: WorkStage[];
}

const WorkStagesSection: React.FC<WorkStagesSectionProps> = ({
  workStages,
}) => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-text-light mb-12 md:mb-16">
        Как мы работаем
      </h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Вертикальная линия (Десктоп) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[--color-accent-red]/30 transform -translate-x-1/2"></div>

        {workStages.map((stage, index) => (
          <div
            key={index}
            className={`mb-12 md:mb-8 flex md:items-center w-full relative ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Контент */}
            <div className="w-full md:w-5/12 px-4 py-6 bg-secondary-dark/60 backdrop-blur-sm rounded-lg shadow-lg border border-white/10 ml-8 md:ml-0">
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

            {/* Точка и соединитель (Десктоп) */}
            <div className="hidden md:flex w-2/12 justify-center items-center relative">
              <div className="absolute z-10 w-4 h-4 rounded-full bg-[--color-accent-red] border-2 border-secondary-dark"></div>
              <div
                className={`absolute w-full h-0.5 bg-[--color-accent-red]/30 ${
                  index % 2 === 0 ? "right-1/2" : "left-1/2"
                }`}
              ></div>
            </div>

            {/* Пустой блок (Десктоп) */}
            <div className="hidden md:block w-5/12"></div>

            {/* Линия и точка (Мобильные) */}
            <div className="md:hidden absolute left-0 top-0 h-full flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-[--color-accent-red] border-2 border-secondary-dark mt-[22px] flex-shrink-0"></div>
              {index < workStages.length - 1 && (
                <div className="w-0.5 bg-[--color-accent-red]/30 h-full mt-2"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkStagesSection;
