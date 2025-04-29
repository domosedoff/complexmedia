// src/components/ContactFormFetch.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link"; // <-- Убедитесь, что импорт Link есть
import { Send, LoaderCircle, CheckCircle, AlertCircle } from "lucide-react";

export const ContactFormFetch = () => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const servicesOptions = [
    "Разработка Сайтов",
    "AI Telegram Боты",
    "Разработка AI Агентов",
    "Другой вопрос",
  ];

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Проверяем чекбокс перед отправкой (хотя required должен сработать)
    if (!formData.has("privacy-consent")) {
      setStatus("error");
      setMessage("Необходимо согласиться с Политикой конфиденциальности.");
      // Устанавливаем таймаут для сброса этой ошибки
      timeoutRef.current = setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
      return; // Прерываем отправку
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setMessage(result.message || "Сообщение успешно отправлено!");
        formRef.current?.reset();
      } else {
        setStatus("error");
        setMessage(
          result.error || result.message || "Произошла ошибка при отправке."
        );
        console.error("Form submission error:", result);
        timeoutRef.current = setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
      }
    } catch (error) {
      setStatus("error");
      setMessage("Не удалось связаться с сервером.");
      console.error("Fetch error:", error);
      timeoutRef.current = setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="bg-secondary-dark/60 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10 shadow-lg h-full">
      <h3 className="text-xl font-semibold text-text-light mb-6">
        Или отправьте нам сообщение:
      </h3>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        {/* Поля формы */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text-muted mb-1"
          >
            Ваше имя <span className="text-[--color-accent-red]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 bg-primary-dark border border-white/20 rounded-md text-text-light placeholder-text-muted/50 focus:outline-none focus:border-[--color-accent-red] focus:ring-1 focus:ring-[--color-accent-red] transition"
            placeholder="Иван Иванов"
          />
        </div>
        <div>
          <label
            htmlFor="contactInfo"
            className="block text-sm font-medium text-text-muted mb-1"
          >
            Email или Telegram{" "}
            <span className="text-[--color-accent-red]">*</span>
          </label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            required
            className="w-full px-3 py-2 bg-primary-dark border border-white/20 rounded-md text-text-light placeholder-text-muted/50 focus:outline-none focus:border-[--color-accent-red] focus:ring-1 focus:ring-[--color-accent-red] transition"
            placeholder="your@email.com или @your_telegram"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-text-muted mb-1"
          >
            Интересующая услуга
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="w-full px-3 py-2 bg-primary-dark border border-white/20 rounded-md text-text-light focus:outline-none focus:border-[--color-accent-red] focus:ring-1 focus:ring-[--color-accent-red] transition appearance-none"
          >
            <option value="" disabled>
              Выберите услугу...
            </option>
            {servicesOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text-muted mb-1"
          >
            Ваше сообщение <span className="text-[--color-accent-red]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-3 py-2 bg-primary-dark border border-white/20 rounded-md text-text-light placeholder-text-muted/50 focus:outline-none focus:border-[--color-accent-red] focus:ring-1 focus:ring-[--color-accent-red] transition"
            placeholder="Опишите кратко вашу задачу или вопрос..."
          ></textarea>
        </div>

        {/* Кнопка отправки */}
        <div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className={`w-full inline-flex items-center justify-center gap-2 font-semibold py-2.5 px-6 rounded-lg
                       shadow-md hover:shadow-lg
                       border
                       border-solid
                       transform active:scale-[0.98]
                       transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-dark focus:ring-[--color-accent-red]
                       ${
                         status === "submitting"
                           ? "bg-[--color-accent-red]/50 text-white/70 border-transparent cursor-not-allowed shadow-none"
                           : "bg-[--color-accent-red] hover:bg-[--color-accent-red-hover] text-white border-[--color-accent-red] hover:border-[--color-accent-red-hover] cursor-pointer hover:-translate-y-px"
                       }`}
          >
            {status === "submitting" ? (
              <>
                <LoaderCircle size={18} className="animate-spin" />
                Отправка...
              </>
            ) : (
              <>
                Отправить сообщение
                <Send size={18} />
              </>
            )}
          </button>
        </div>

        {/* --- БЛОК СОГЛАСИЯ (ПОД КНОПКОЙ) --- */}
        <div className="flex items-start space-x-2 pt-1">
          {" "}
          {/* Уменьшил pt */}
          <input
            id="privacy-consent"
            name="privacy-consent" // Важно для FormData
            type="checkbox"
            required
            className="h-4 w-4 mt-0.5 rounded border-gray-400 text-[--color-accent-red] focus:ring-[--color-accent-red]/50 bg-primary-dark flex-shrink-0 cursor-pointer"
          />
          <label
            htmlFor="privacy-consent"
            className="text-xs text-text-muted cursor-pointer"
          >
            {`Нажимая "Отправить сообщение", я даю согласие на обработку моих персональных данных в соответствии с `}
            <Link
              href="/privacy-policy"
              target="_blank"
              className="text-[--color-accent-red]/80 hover:text-[--color-accent-red] underline"
            >
              Политикой конфиденциальности
            </Link>
            {`.`}
          </label>
        </div>
        {/* --- КОНЕЦ БЛОКА СОГЛАСИЯ --- */}

        {/* Статус отправки */}
        {message && status !== "submitting" && (
          <div
            className={`mt-4 text-sm flex items-center gap-2 ${
              status === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status === "success" ? (
              <CheckCircle size={16} />
            ) : (
              <AlertCircle size={16} />
            )}
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactFormFetch;
