import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  FolderTree,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { createPageMetadata } from "@/seo";

export const metadata = createPageMetadata({
  title: "Корпоративная база знаний: документы и ИИ-поиск",
  description:
    "Как создать корпоративную базу знаний: собрать документы, убрать дубли, настроить версии и доступ, подключить ИИ-поиск со ссылками на источники.",
  path: "/articles/corporate-knowledge-base",
  type: "article",
});

const preparation = [
  {
    icon: FileSearch,
    title: "Инвентаризация",
    text: "Собираем регламенты, инструкции, шаблоны, переписку и другие источники, фиксируя владельца и актуальность каждого документа.",
  },
  {
    icon: FolderTree,
    title: "Структура",
    text: "Группируем знания по продуктам, процессам, ролям и объектам бизнеса, чтобы один факт не приходилось хранить в нескольких местах.",
  },
  {
    icon: ShieldCheck,
    title: "Управление",
    text: "Назначаем права доступа, ответственных за обновление и понятные правила публикации новых версий.",
  },
  {
    icon: SearchCheck,
    title: "Проверка поиска",
    text: "Готовим набор реальных вопросов сотрудников и проверяем полноту ответа, точность и корректность ссылок на источники.",
  },
];

const stages = [
  [
    "1. Карта источников",
    "Определяем, где сейчас находятся знания: в файловых хранилищах, CRM, почте, чатах, таблицах и у отдельных сотрудников.",
  ],
  [
    "2. Очистка",
    "Удаляем явные дубли, отмечаем устаревшие материалы и выносим противоречия на решение владельцев процесса.",
  ],
  [
    "3. Модель знаний",
    "Создаём единые названия сущностей, связи, метаданные и правила разбиения документов на самостоятельные смысловые блоки.",
  ],
  [
    "4. Права и версии",
    "Разделяем открытые и ограниченные материалы, фиксируем автора, дату обновления и действующую редакцию.",
  ],
  [
    "5. ИИ-поиск",
    "Подключаем поиск по смыслу, который формирует ответ только из разрешённых материалов и показывает использованные источники.",
  ],
  [
    "6. Пилот",
    "Запускаем решение на одном подразделении, анализируем неудачные запросы и дополняем базу по фактическим пробелам.",
  ],
];

const faq = [
  {
    question: "Чем корпоративная база знаний отличается от папки с файлами?",
    answer:
      "В базе есть единая структура, владельцы материалов, версии, права доступа и правила обновления. Поэтому сотрудник может определить не только где лежит документ, но и является ли он действующим.",
  },
  {
    question: "Нужно ли переносить все документы сразу?",
    answer:
      "Нет. Для пилота достаточно материалов одного процесса или подразделения и набора частых вопросов, по которым можно проверить качество поиска.",
  },
  {
    question: "Может ли ИИ придумать ответ, которого нет в документах?",
    answer:
      "Риск снижается ограничением ответов найденными источниками, обязательными ссылками на них и отказом от ответа при недостатке подтверждённой информации.",
  },
  {
    question: "Как поддерживать базу знаний после запуска?",
    answer:
      "У каждого раздела должен быть владелец, а у материалов — срок или событие пересмотра. Неудачные поисковые запросы используются как очередь на дополнение базы.",
  },
];

export default function CorporateKnowledgeBaseArticle() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Корпоративная база знаний: как собрать документы и подключить ИИ-поиск",
        description:
          "Практическое руководство по подготовке документов, структуре, правам доступа, версиям и запуску ИИ-поиска.",
        datePublished: "2026-07-30",
        dateModified: "2026-07-30",
        inLanguage: "ru-RU",
        mainEntityOfPage:
          "https://complexmedia.ru/articles/corporate-knowledge-base",
        author: {
          "@type": "Organization",
          name: "Комплекс Медиа",
          url: "https://complexmedia.ru",
        },
        publisher: {
          "@type": "Organization",
          name: "Комплекс Медиа",
          url: "https://complexmedia.ru",
          logo: {
            "@type": "ImageObject",
            url: "https://complexmedia.ru/logo_01.png",
          },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: "https://complexmedia.ru",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Корпоративная база знаний",
            item: "https://complexmedia.ru/articles/corporate-knowledge-base",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageWrapper title="Корпоративная база знаний: как собрать документы и подключить ИИ-поиск">
        <article className="mx-auto max-w-5xl space-y-12 rounded-3xl bg-primary-dark/95 p-4 md:space-y-16 md:p-8">
          <header className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-7 shadow-lg md:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
              Практическое руководство
            </p>
            <p className="text-xl font-medium leading-relaxed text-text-light md:text-2xl">
              ИИ-поиск не исправляет хаос в документах. Сначала компании нужна
              управляемая база: понятная структура, действующие версии,
              владельцы материалов и права доступа. После этого ИИ может
              находить ответы и показывать, на каких источниках они основаны.
            </p>
          </header>

          <nav
            aria-label="Содержание статьи"
            className="rounded-2xl border border-white/10 bg-secondary-dark/60 p-7"
          >
            <h2 className="mb-4 text-xl font-bold text-text-light">
              Содержание
            </h2>
            <div className="grid gap-3 text-sm md:grid-cols-2">
              {[
                ["#prepare", "Что подготовить"],
                ["#stages", "Этапы создания базы"],
                ["#search", "Как работает ИИ-поиск"],
                ["#security", "Доступ и актуальность"],
                ["#metrics", "Как измерять результат"],
                ["#faq", "Вопросы и ответы"],
              ].map(([href, title]) => (
                <a
                  key={href}
                  href={href}
                  className="text-text-muted transition-colors hover:text-[--color-accent-red]"
                >
                  {title}
                </a>
              ))}
            </div>
          </nav>

          <section id="prepare">
            <h2 className="mb-7 text-2xl font-bold text-text-light md:text-3xl">
              Что подготовить до подключения ИИ
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {preparation.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-secondary-dark/60 p-6"
                >
                  <Icon
                    size={28}
                    className="mb-4 text-[--color-accent-red]"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-text-light">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="stages">
            <h2 className="mb-7 text-2xl font-bold text-text-light md:text-3xl">
              Этапы создания корпоративной базы знаний
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {stages.map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-secondary-dark/60 p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold text-text-light">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="search"
            className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-7 md:p-9"
          >
            <h2 className="mb-5 text-2xl font-bold text-text-light md:text-3xl">
              Как работает ИИ-поиск по документам
            </h2>
            <div className="space-y-4 leading-relaxed text-text-muted">
              <p>
                Сотрудник задаёт вопрос обычным языком. Система ищет
                подходящие фрагменты по смыслу, учитывает права пользователя и
                передаёт найденные материалы языковой модели. Ответ формируется
                на их основе и содержит ссылки на исходные документы.
              </p>
              <p>
                Такой подход обычно называют RAG. Его качество зависит прежде
                всего от актуальности источников, структуры материалов,
                корректного разбиения текста и набора контрольных вопросов, а
                не только от выбранной модели.
              </p>
            </div>
          </section>

          <section id="security">
            <h2 className="mb-6 text-2xl font-bold text-text-light md:text-3xl">
              Как сохранить доступ и актуальность под контролем
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "поиск учитывает роль и права сотрудника",
                "ответ содержит ссылки на использованные источники",
                "у каждого раздела назначен владелец",
                "действующая версия отделена от архива",
                "изменения документов фиксируются",
                "при недостатке данных система сообщает об этом",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-white/10 bg-secondary-dark/60 p-4 text-text-muted"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 flex-shrink-0 text-[--color-accent-red]"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="metrics">
            <h2 className="mb-7 text-2xl font-bold text-text-light md:text-3xl">
              Как измерять результат пилота
            </h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["Скорость", "время поиска ответа до и после запуска"],
                ["Точность", "доля ответов, подтверждённых источниками"],
                ["Полнота", "доля контрольных вопросов с полезным ответом"],
                ["Актуальность", "число найденных устаревших материалов"],
                ["Нагрузка", "число повторных вопросов экспертам"],
                ["Принятие", "доля сотрудников, использующих поиск регулярно"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-secondary-dark/60 p-6"
                >
                  <h3 className="mb-2 font-semibold text-text-light">{title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-text-muted">
              Целевые значения определяются после замера текущей работы.
              Неудачные вопросы не скрываются: они показывают, какие документы
              нужно уточнить или добавить.
            </p>
          </section>

          <section id="faq">
            <h2 className="mb-7 text-2xl font-bold text-text-light md:text-3xl">
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <details
                  key={item.question}
                  className="rounded-xl border border-white/10 bg-secondary-dark/60 p-5"
                >
                  <summary className="cursor-pointer font-semibold text-text-light">
                    {item.question}
                  </summary>
                  <p className="mt-3 leading-relaxed text-text-muted">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-[--color-accent-red]/30 bg-secondary-dark/70 p-7 text-center md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-text-light">
              Нужна единая база знаний с ИИ-поиском?
            </h2>
            <p className="mx-auto mb-7 max-w-2xl text-text-muted">
              Определим первый набор документов, подготовим структуру и
              зафиксируем контрольные вопросы для пилота.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/services/digital-asset"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[--color-accent-red] px-6 py-3 font-semibold text-white transition-colors hover:bg-[--color-accent-red-hover]"
              >
                Заказать корпоративную базу знаний
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/cases/metal-production"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-text-light transition-colors hover:border-[--color-accent-red]"
              >
                Посмотреть решение
              </Link>
            </div>
          </section>
        </article>
      </PageWrapper>
    </>
  );
}
