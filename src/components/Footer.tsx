// src/components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // --- НАСТРОЙКА ССЫЛОК ---
  const telegramBotLink = "https://t.me/complexmedia_bot"; // Ссылка на бота для ТЗ
  const personalTelegramLink = "https://t.me/domosedoff"; // ЗАМЕНИТЕ на вашу личную ссылку
  const logoPath = "/logo_01.png"; // Ваш путь к лого
  // --- КОНЕЦ НАСТРОЙКИ ---

  return (
    <footer className="bg-secondary-dark border-t border-gray-700/50 mt-20 py-10">
      <div className="container mx-auto px-4 text-center text-text-muted">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Блок 1: Лого и слоган */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Image
                src={logoPath}
                alt="Комплекс Медиа Логотип"
                width={120}
                height={32}
              />
            </Link>
            <p className="text-sm">&quot;ЭФФЕКТИВНЫЕ КОММУНИКАЦИИ&quot;</p>
          </div>

          {/* Блок 2: Навигация */}
          <div className="flex flex-col items-center space-y-2">
            <h4 className="font-semibold text-text-light mb-2">Навигация</h4>
            <Link
              href="/#services"
              className="hover:text-text-light transition-colors"
            >
              Услуги
            </Link>
            <Link
              href="/about"
              className="hover:text-text-light transition-colors"
            >
              О нас
            </Link>
            {/* Ссылка на портфолио закомментирована */}
            <Link
              href="/contact"
              className="hover:text-text-light transition-colors"
            >
              Контакты
            </Link>
          </div>

          {/* --- ИЗМЕНЕННЫЙ БЛОК 3: КОНТАКТЫ --- */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <h4 className="font-semibold text-text-light mb-2">
              Свяжитесь с нами
            </h4>
            {/* Ссылка 1: Создать ТЗ */}
            <a
              href={telegramBotLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[--color-accent-red] transition-colors"
            >
              Создать ТЗ на сайт
            </a>
            {/* Ссылка 2: Обсудить автоматизацию */}
            <a
              href={personalTelegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[--color-accent-red] transition-colors"
            >
              Обсудить автоматизацию ИИ
            </a>
            {/* Ссылка 3: Другие способы */}
            <Link
              href="/contact"
              className="hover:text-[--color-accent-red] transition-colors"
            >
              Другие способы связи
            </Link>
          </div>
          {/* --- КОНЕЦ ИЗМЕНЕНИЙ --- */}
        </div>

        {/* Нижняя строка */}
        <div className="border-t border-gray-700/50 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} Комплекс Медиа. Все права защищены.</p>
          <Link
            href="/privacy-policy"
            className="mt-2 md:mt-0 hover:text-text-light transition-colors"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
