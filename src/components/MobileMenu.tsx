// src/components/MobileMenu.tsx
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  telegramBotLink: string;
}

// --- ДОБАВЛЯЕМ ИНТЕРФЕЙС ДЛЯ ССЫЛКИ МЕНЮ ---
interface MenuLinkItem {
  href: string;
  title: string;
}
// --- КОНЕЦ ДОБАВЛЕНИЯ ---

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  telegramBotLink,
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

  // --- УКАЗЫВАЕМ ТИП ДЛЯ МАССИВА menuLinks ---
  const menuLinks: MenuLinkItem[] = [
    { href: "/", title: "Главная" },
    { href: "/#services", title: "Услуги" },
    { href: "/about", title: "О нас" },
    { href: "/portfolio", title: "Портфолио" },
    { href: "/contact", title: "Контакты" },
  ];
  // --- КОНЕЦ ИЗМЕНЕНИЯ ---

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
            <nav className="flex flex-col items-center space-y-5 mb-10">
              {menuLinks.map(
                (
                  link,
                  index // Теперь TypeScript знает тип link
                ) => (
                  <motion.div
                    key={link.href}
                    custom={index}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={link.href}
                      className="text-2xl text-text-muted hover:text-text-light transition-colors"
                      onClick={onClose}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                )
              )}
            </nav>

            <motion.div
              custom={menuLinks.length} // TypeScript знает тип menuLinks.length
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              className="mt-auto text-center"
            >
              <Link
                href={telegramBotLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                onClick={onClose}
              >
                Начать проект (TG)
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
