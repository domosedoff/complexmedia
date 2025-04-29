// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const logoPath = "/logo.png"; // ЗАМЕНИТЕ
  const telegramBotLink = "https://t.me/complexmedia_bot"; // ЗАМЕНИТЕ
  const logoWidth = 150;
  const logoHeight = 40;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    // У хедера z-50
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary-dark/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Логотип (z-index не обязателен, т.к. хедер z-50) */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src={logoPath}
            alt="Комплекс Медиа Логотип"
            width={logoWidth}
            height={logoHeight}
            priority
          />
        </Link>

        {/* Навигационное меню (Десктоп) */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* ... ссылки ... */}
          <Link
            href="/"
            className="text-[--color-text-muted] hover:text-[--color-text-light] transition-colors"
          >
            Главная
          </Link>
          <Link
            href="/#services"
            className="text-[--color-text-muted] hover:text-[--color-text-light] transition-colors"
          >
            Услуги
          </Link>
          <Link
            href="/about"
            className="text-[--color-text-muted] hover:text-[--color-text-light] transition-colors"
          >
            О нас
          </Link>
          <Link
            href="/portfolio"
            className="text-[--color-text-muted] hover:text-[--color-text-light] transition-colors"
          >
            Портфолио
          </Link>
          <Link
            href="/contact"
            className="text-[--color-text-muted] hover:text-[--color-text-light] transition-colors"
          >
            Контакты
          </Link>
        </nav>

        {/* Кнопка CTA (Десктоп) */}
        <Link
          href={telegramBotLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300 whitespace-nowrap"
        >
          Начать проект (TG)
        </Link>

        {/* Кнопка Бургер-меню (Мобильные) */}
        {/* Убедимся, что у кнопки есть position: relative, чтобы z-index сработал */}
        <div className="md:hidden ml-4 relative z-[51]">
          {" "}
          {/* Увеличили z-index до 51 (выше хедера) */}
          <button
            onClick={toggleMobileMenu}
            className="text-[--color-text-light] focus:outline-none p-2 -mr-2"
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню (z-40) */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        telegramBotLink={telegramBotLink}
      />
    </header>
  );
};

export default Header;
