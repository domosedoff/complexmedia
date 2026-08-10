// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const serviceLinks = [
  { href: "/services/web-development", title: "Разработка сайтов" },
  { href: "/services/ai-bots", title: "ИИ-чат-боты" },
  { href: "/services/voice-ai-consultant", title: "Голосовой ИИ-консультант" },
  { href: "/services/ai-agents", title: "ИИ-агенты" },
  { href: "/services/ai-sales-automation", title: "ИИ для продаж" },
  { href: "/services/executive-ai-assistant", title: "Помощник руководителя" },
  { href: "/services/ai-consulting", title: "ИИ-консалтинг" },
  { href: "/services/digital-asset", title: "База знаний" },
];

const Header = () => {
  const logoPath = "/logo_01.png"; // ЗАМЕНИТЕ
  const personalTelegramLink = "https://t.me/domosedoff";
  const phoneNumber = "+7 (495) 108-53-16";
  const phoneLink = "tel:+74951085316";
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
            className="h-auto"
            priority
          />
        </Link>

        {/* Навигационное меню (Десктоп) */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {/* ... ссылки ... */}
          <Link
            href="/"
            className="text-[--color-text-muted] hover:text-[--color-text-light] transition-colors"
          >
            Главная
          </Link>
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 text-[--color-text-muted] transition-colors hover:text-[--color-text-light]">
              Услуги
              <ChevronDown
                size={15}
                aria-hidden="true"
                className="transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3">
              <div className="rounded-xl border border-white/10 bg-secondary-dark p-2 shadow-2xl">
                <Link
                  href="/#services"
                  className="block rounded-lg px-4 py-2.5 text-sm text-text-muted transition-colors hover:bg-primary-dark hover:text-text-light"
                >
                  Все услуги
                </Link>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block rounded-lg px-4 py-2.5 text-sm text-text-muted transition-colors hover:bg-primary-dark hover:text-text-light"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </details>
          <Link
            href="/#cases"
            className="text-[--color-text-muted] hover:text-[--color-text-light] transition-colors"
          >
            Кейсы
          </Link>
          <Link
            href="/articles"
            className="text-[--color-text-muted] hover:text-[--color-text-light] transition-colors"
          >
            Статьи
          </Link>
          <Link
            href="/about"
            className="text-[--color-text-muted] hover:text-[--color-text-light] transition-colors"
          >
            О нас
          </Link>
          {/* <Link
            href="/portfolio"
            className="text-[--color-text-muted] hover:text-[--color-text-light] transition-colors"
          >
            Портфолио
          </Link> */}
          <Link
            href="/contact"
            className="text-[--color-text-muted] hover:text-[--color-text-light] transition-colors"
          >
            Контакты
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-x-3">
          <a
            href={phoneLink}
            className="text-[--color-text-muted] hover:text-[--color-text-light] transition-colors whitespace-nowrap"
          >
            {phoneNumber}
          </a>
          <Link
            href={personalTelegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300 whitespace-nowrap"
          >
            Обсудить внедрение ИИ
          </Link>
        </div>
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
        personalTelegramLink={personalTelegramLink}
      />
    </header>
  );
};

export default Header;
