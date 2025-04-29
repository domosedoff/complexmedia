// src/components/Header.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  // --- НАСТРОЙКА ---
  const logoPath = "/logo-placeholder.svg"; // ЗАМЕНИТЕ на ваш путь
  const telegramBotLink = "#"; // ЗАМЕНИТЕ на вашу ссылку
  const logoWidth = 150; // ЗАМЕНИТЕ на вашу ширину
  const logoHeight = 40; // ЗАМЕНИТЕ на вашу высоту
  // --- КОНЕЦ НАСТРОЙКИ ---

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[--color-secondary-dark]/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Логотип */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src={logoPath}
            alt="Комплекс Медиа Логотип"
            width={logoWidth}
            height={logoHeight}
            priority
          />
        </Link>

        {/* Навигационное меню (скрыто на md и меньше) */}
        <nav className="hidden md:flex items-center space-x-6">
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

        {/* Кнопка CTA (Telegram Бот) */}
        {/* !!! ВРЕМЕННО УБРАН КЛАСС 'hidden' ДЛЯ ТЕСТА !!! */}
        <Link
          href={telegramBotLink}
          target="_blank"
          rel="noopener noreferrer"
          // Класс 'hidden' временно удален. Оставили 'md:inline-block'
          className="md:inline-block bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300 whitespace-nowrap"
        >
          Начать проект (TG)
        </Link>

        {/* Мобильное меню (Placeholder) */}
        {/* !!! ВАЖНО: Навигация и кнопка CTA выше тоже скрыты на мобильных (hidden md:flex / md:inline-block) */}
        {/* !!! Нужно будет реализовать бургер-меню, которое будет показывать их на мобильных */}
        <div className="md:hidden ml-4">
          <button className="text-[--color-text-light] focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
