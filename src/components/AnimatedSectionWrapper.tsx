// src/components/AnimatedSectionWrapper.tsx
"use client"; // <-- Делаем этот компонент клиентским!

import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedSectionWrapperProps {
  children: React.ReactNode;
  className?: string; // Позволим передавать доп. классы, если нужно
  amount?: number; // Позволим настраивать порог видимости
}

// Определяем варианты анимации один раз
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const AnimatedSectionWrapper: React.FC<AnimatedSectionWrapperProps> = ({
  children,
  className,
  amount = 0.2, // Значение по умолчанию
}) => {
  return (
    <motion.div
      className={className} // Передаем классы дальше
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: amount }} // Используем amount из пропсов
    >
      {children}
    </motion.div>
  );
};
