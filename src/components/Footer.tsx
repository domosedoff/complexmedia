// src/components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Теперь Image используется

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // TODO: Замените на ваши реальные контакты и ссылки
  const email = "info@complexmedia.ru";
  const telegramUsername = "complexmedia_bot"; // Пример
  const telegramLink = `https://t.me/${telegramUsername}`;
  // TODO: Замените '/logo-placeholder.svg' на реальный путь к вашему логотипу в /public
  const logoPath = "/logo_01.png"; // ВРЕМЕННО: Используйте плейсхолдер или ваш файл

  return (
    // Используем CSS переменные через theme() для Tailwind v4
    <footer className="bg-[--color-secondary-dark] border-t border-gray-700/50 mt-20 py-10">
      <div className="container mx-auto px-4 text-center text-[--color-text-muted]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Блок 1: Лого и слоган */}
          <div className="flex flex-col items-center md:items-start">
            {/* Используем логотип */}
            <Link href="/" className="mb-4">
              <Image
                src={logoPath} // Используем logoPath
                alt="Комплекс Медиа Логотип"
                width={120} // Меньший размер для футера
                height={32} // Подставьте высоту вашего лого
              />
            </Link>
            <p className="text-sm">ЭФФЕКТИВНЫЕ КОММУНИКАЦИИ</p>
          </div>

          {/* Блок 2: Навигация */}
          <div className="flex flex-col items-center space-y-2">
            <h4 className="font-semibold text-[--color-text-light] mb-2">
              Навигация
            </h4>
            <Link
              href="/#services"
              className="hover:text-[--color-text-light] transition-colors"
            >
              Услуги
            </Link>
            <Link
              href="/about"
              className="hover:text-[--color-text-light] transition-colors"
            >
              О нас
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-[--color-text-light] transition-colors"
            >
              Портфолио
            </Link>
            <Link
              href="/contact"
              className="hover:text-[--color-text-light] transition-colors"
            >
              Контакты
            </Link>
          </div>

          {/* Блок 3: Контакты */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <h4 className="font-semibold text-[--color-text-light] mb-2">
              Свяжитесь с нами
            </h4>
            <a
              href={`mailto:${email}`}
              className="hover:text-[--color-text-light] transition-colors"
            >
              {email}
            </a>
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[--color-text-light] transition-colors"
            >
              Telegram: @{telegramUsername}
            </a>
          </div>
        </div>

        {/* Нижняя строка: Копирайт и Политика */}
        <div className="border-t border-gray-700/50 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {currentYear} Комплекс Медиа. Все права защищены.</p>
          <Link
            href="/privacy-policy"
            className="mt-2 md:mt-0 hover:text-[--color-text-light] transition-colors"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
