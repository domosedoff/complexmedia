import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ClipboardList,
  MessagesSquare,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { ServiceNavigation } from "@/components/ServiceNavigation";
import { createPageMetadata } from "@/seo";

export const metadata = createPageMetadata({
  title: "Корпоративная платформа ИИ-сотрудников под ключ",
  description:
    "Внедряем корпоративную платформу ИИ-сотрудников: база знаний, каталоги, рабочие задачи, подключение каналов и контроль ответов в едином контуре компании.",
  path: "/services/ai-platform",
});

const capabilities = [
  {
    icon: Sparkles,
    title: "ИИ-сотрудники под задачи компании",
    text: "Создаём консультантов, помощников, HR- и технических сотрудников с отдельной ролью, инструкциями и доступом к нужным материалам.",
  },
  {
    icon: BookOpenCheck,
    title: "Корпоративная база знаний",
    text: "Документы, регламенты, FAQ и инструкции хранятся с версиями, источниками и управляемыми правами доступа.",
  },
  {
    icon: Network,
    title: "Каталог продуктов и услуг",
    text: "Структурированные предложения, характеристики и цены отделены от свободного текста и проверяются перед ответом клиенту.",
  },
  {
    icon: ClipboardList,
    title: "Рабочие задачи и процессы",
    text: "Руководитель ставит поручения отделу или конкретному ИИ-сотруднику, задаёт срок, приоритет и критерии результата.",
  },
  {
    icon: MessagesSquare,
    title: "Подключение рабочих каналов",
    text: "Платформу можно связать с сайтом, Telegram, MAX, Jivo и другими каналами, которые использует команда.",
  },
  {
    icon: ShieldCheck,
    title: "Контроль, версии и аудит",
    text: "Ответы опираются на разрешённые источники, а изменения сборок, документы, задачи и результаты остаются проверяемыми.",
  },
];

const steps = [
  [
    "1. Разбираем процессы и знания",
    "Проводим бизнес-анализ, находим повторяющиеся операции, собираем документы, каталоги и правила, которые должны стать источниками для ИИ.",
  ],
  [
    "2. Собираем контур компании",
    "Настраиваем структуру компании, отделы, роли ИИ-сотрудников, права доступа и актуальные версии материалов.",
  ],
  [
    "3. Подключаем сценарий",
    "Запускаем выбранный процесс: консультации, поддержка, продажи, подготовка КП, работа с каталогом или внутренние поручения.",
  ],
  [
    "4. Проверяем и развиваем",
    "Тестируем ответы на реальных формулировках, контролируем источники и постепенно расширяем список задач после пилота.",
  ],
];

const faqItems = [
  [
    "Чем платформа отличается от обычного ИИ-чат-бота?",
    "Чат-бот решает один сценарий. Платформа объединяет базу знаний, роли ИИ-сотрудников, каталоги, рабочие задачи, каналы и контроль доступа в единой системе.",
  ],
  [
    "Можно ли использовать наши документы и существующий каталог?",
    "Да. Мы подключаем согласованные документы, регламенты, FAQ, таблицы и каталоги, сохраняя версии и источник каждого важного факта.",
  ],
  [
    "Какие процессы можно автоматизировать?",
    "Консультации и поддержку, квалификацию лидов, подготовку КП и спецификаций, поиск по корпоративным знаниям, внутренние поручения и другие повторяющиеся операции.",
  ],
  [
    "Как контролируется точность ответов?",
    "ИИ-сотрудник получает только разрешённые источники и правила своей роли. Для каталогов и расчётов сначала выполняются структурированные проверки, а затем формируется ответ.",
  ],
];

export default function AiPlatformPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Корпоративная платформа ИИ-сотрудников",
    serviceType: "Внедрение корпоративной платформы ИИ-сотрудников",
    provider: {
      "@type": "Organization",
      name: "Комплекс Медиа",
      url: "https://complexmedia.ru",
      telephone: "+74951085316",
    },
    areaServed: "RU",
    url: "https://complexmedia.ru/services/ai-platform",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageWrapper
        title="Корпоративная платформа ИИ-сотрудников"
        showCta
        personalTelegramLink="/contact"
        ctaText="Обсудить платформу ИИ-сотрудников"
      >
        <ServiceNavigation />

        <div className="space-y-12 md:space-y-20">
          <section className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-8 shadow-lg md:p-10">
            <p className="mb-5 text-xl font-medium leading-relaxed text-text-light md:text-2xl">
              Единая рабочая среда, в которой корпоративные знания превращаются в
              работающих ИИ-сотрудников и управляемые процессы.
            </p>
            <p className="max-w-4xl leading-relaxed text-text-muted">
              Платформа объединяет базу знаний, каталоги продуктов и услуг, роли
              ИИ-сотрудников, рабочие задачи и подключённые каналы. Поэтому ИИ не
              просто отвечает на вопросы, а помогает выполнять конкретную работу по
              правилам компании.
            </p>
          </section>

          <section>
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                Возможности платформы
              </p>
              <h2 className="text-3xl font-bold text-text-light">
                ИИ работает внутри процессов бизнеса
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-xl border border-white/10 bg-secondary-dark/70 p-6 shadow-lg"
                >
                  <Icon
                    size={32}
                    strokeWidth={1.5}
                    className="mb-4 text-[--color-accent-red]"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-text-light">{title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-8">
              <h2 className="mb-5 text-2xl font-bold text-text-light">
                Как внедряем платформу
              </h2>
              <div className="space-y-4">
                {steps.map(([title, text]) => (
                  <article key={title}>
                    <h3 className="mb-1 text-lg font-semibold text-text-light">{title}</h3>
                    <p className="text-sm leading-relaxed text-text-muted">{text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[--color-accent-red]/30 bg-secondary-dark/70 p-8">
              <h2 className="mb-4 text-2xl font-bold text-text-light">Для каких задач</h2>
              <div className="space-y-4">
                {[
                  "поддержка и консультации клиентов",
                  "квалификация лидов и работа отдела продаж",
                  "поиск по регламентам и корпоративным знаниям",
                  "подготовка КП, спецификаций и внутренних отчётов",
                  "поручения сотрудникам и контроль следующих шагов",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-text-muted">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 flex-shrink-0 text-[--color-accent-red]"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-text-light transition-colors hover:text-[--color-accent-red]"
              >
                Обсудить задачу
                <ArrowRight size={18} />
              </Link>
            </div>
          </section>

          <section className="rounded-2xl border border-[--color-accent-red]/25 bg-secondary-dark/70 p-8 shadow-lg md:p-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
              Отдельный модуль
            </p>
            <h2 className="mb-4 text-3xl font-bold text-text-light">
              Генератор спецификаций и коммерческих предложений
            </h2>
            <p className="mb-6 max-w-4xl leading-relaxed text-text-muted">
              Для компаний с большим каталогом платформа может принять свободный
              запрос менеджера, подобрать подходящие позиции по подтверждённым
              характеристикам и подготовить результат в настроенном формате XLSX или
              PDF. Цена, наличие и технические параметры берутся из актуального
              каталога, а не придумываются моделью.
            </p>
            <div className="flex flex-wrap gap-3">
              {["точный подбор", "проверяемые расчёты", "версионирование каталога", "XLSX и PDF"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-primary-dark px-4 py-2 text-sm text-text-muted"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-secondary-dark/70 p-8 md:p-10">
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[--color-accent-red]">
                FAQ
              </p>
              <h2 className="text-3xl font-bold text-text-light">
                Вопросы о корпоративной платформе ИИ
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {faqItems.map(([question, answer]) => (
                <article key={question}>
                  <h3 className="mb-2 text-lg font-semibold text-text-light">{question}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{answer}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </PageWrapper>
    </>
  );
}
