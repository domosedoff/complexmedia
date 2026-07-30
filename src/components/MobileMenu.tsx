// src/components/MobileMenu.tsx
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  personalTelegramLink: string; // Добавляем вторую ссылку
}

interface MenuLinkItem {
  href: string;
  title: string;
  nested?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  personalTelegramLink,
}) => {
  const menuVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
      transition: { type: "tween", duration: 0.3, ease: "easeOut" },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", duration: 0.3, ease: "easeIn" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 + 0.2, duration: 0.2 },
    }),
  };

  // --- УБИРАЕМ ССЫЛКУ НА ПОРТФОЛИО ---
  const menuLinks: MenuLinkItem[] = [
    { href: "/", title: "Главная" },
    { href: "/#services", title: "Услуги" },
    { href: "/services/web-development", title: "Разработка сайтов", nested: true },
    { href: "/services/ai-bots", title: "ИИ-чат-боты", nested: true },
    { href: "/services/ai-agents", title: "ИИ-агенты", nested: true },
    { href: "/services/ai-sales-automation", title: "ИИ для продаж", nested: true },
    { href: "/services/executive-ai-assistant", title: "Помощник руководителя", nested: true },
    { href: "/services/ai-consulting", title: "ИИ-консалтинг", nested: true },
    { href: "/services/digital-asset", title: "База знаний", nested: true },
    { href: "/#cases", title: "Кейсы" },
    { href: "/articles", title: "Статьи" },
    { href: "/about", title: "О нас" },
    // { href: '/portfolio', title: 'Портфолио' },
    { href: "/contact", title: "Контакты" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 top-0 left-0 w-full h-screen bg-primary-dark/95 backdrop-blur-md z-40 overflow-y-auto"
        >
          <div className="container mx-auto px-4 pt-24 pb-10 flex flex-col h-full">
            <nav className="flex flex-col items-center space-y-3 mb-10">
              {menuLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    className={`transition-colors hover:text-text-light ${
                      link.nested
                        ? "text-base text-[--color-accent-red]"
                        : "text-2xl text-text-muted"
                    }`}
                    onClick={onClose}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* --- ИЗМЕНЕННЫЙ БЛОК CTA --- */}
            <motion.div
              custom={menuLinks.length}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              className="mt-auto text-center space-y-4" // mt-auto прижимает к низу, space-y для отступа
            >
              <Link
                href={personalTelegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                onClick={onClose}
              >
                Обсудить внедрение ИИ
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
