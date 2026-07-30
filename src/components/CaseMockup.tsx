import {
  AlertTriangle,
  BarChart3,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Database,
  FileCheck2,
  FileText,
  Inbox,
  Mail,
  MessageSquareText,
  Mic,
  PackageCheck,
  Search,
  Send,
  Sparkles,
  Truck,
  UserRound,
} from "lucide-react";

export default function CaseMockup({
  slug,
  standalone = false,
}: {
  slug: string;
  standalone?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden border border-slate-700 bg-[#08111f] shadow-2xl ${
        standalone ? "min-h-screen rounded-none" : "rounded-2xl"
      }`}
    >
      <MockHeader />
      <div className={standalone ? "p-5 md:p-8" : "p-4 md:p-6"}>
        {slug === "cosmetology-clinic" && <ClinicMockup />}
        {slug === "metal-production" && <KnowledgeMockup />}
        {slug === "logistics-agent" && <LogisticsMockup />}
        {slug === "equipment-sales" && <SalesMockup />}
        {slug === "executive-assistant" && <ExecutiveMockup />}
      </div>
    </div>
  );
}

function MockHeader() {
  return (
    <div className="flex items-center justify-between border-b border-slate-700 bg-slate-900/80 px-5 py-3">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="text-xs font-medium text-slate-400">
          Complex Media · AI Workspace
        </span>
      </div>
      <span className="flex items-center gap-2 text-xs text-emerald-400">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Система онлайн
      </span>
    </div>
  );
}

function ClinicMockup() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
      <Panel title="Диалог с клиентом" icon={MessageSquareText}>
        <div className="space-y-3">
          <ChatBubble side="right">
            Добрый вечер! Хочу записаться на консультацию по уходу за кожей.
          </ChatBubble>
          <ChatBubble>
            Здравствуйте! Помогу подобрать специалиста и удобное время. Это
            первичная консультация или повторный визит?
          </ChatBubble>
          <ChatBubble side="right">Первичная. Лучше после 18:00.</ChatBubble>
          <ChatBubble>
            Есть два окна: во вторник в 18:30 и в четверг в 19:00. Рекомендации
            по процедурам даст врач после очной консультации.
          </ChatBubble>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <ActionCard label="Вт, 18:30" active />
            <ActionCard label="Чт, 19:00" />
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-300">
            <CheckCircle2 size={18} />
            Предварительная запись создана
          </div>
        </div>
      </Panel>
      <div className="space-y-5">
        <Panel title="Карточка обращения" icon={UserRound}>
          <InfoRow label="Канал" value="Сайт" />
          <InfoRow label="Запрос" value="Консультация" />
          <InfoRow label="Время" value="После 18:00" />
          <InfoRow label="Статус" value="Новая запись" accent />
        </Panel>
        <Panel title="Сегодня" icon={BarChart3}>
          <MetricRow value="38" label="диалогов" />
          <MetricRow value="24" label="обработано автоматически" />
          <MetricRow value="9" label="записей" />
          <MetricRow value="5" label="передано администратору" />
        </Panel>
      </div>
    </div>
  );
}

function KnowledgeMockup() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.7fr_1.6fr]">
      <Panel title="База знаний" icon={Database}>
        <div className="space-y-2 text-sm">
          {[
            ["Продукция", "148"],
            ["ГОСТы и ТУ", "63"],
            ["Сертификаты", "91"],
            ["Регламенты", "42"],
            ["Скрипты продаж", "18"],
          ].map(([name, count], index) => (
            <div
              key={name}
              className={`flex items-center justify-between rounded-lg px-3 py-2.5 ${
                index === 0
                  ? "bg-red-500/15 text-red-200"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <span>{name}</span>
              <span className="text-xs text-slate-500">{count}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 border-t border-slate-700 pt-4">
          <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
            Состояние знаний
          </p>
          <StatusLine color="emerald" label="Проверено" value="327" />
          <StatusLine color="amber" label="Требует ревизии" value="21" />
          <StatusLine color="red" label="Есть противоречия" value="4" />
        </div>
      </Panel>
      <Panel title="ИИ-поиск по корпоративным знаниям" icon={Search}>
        <div className="mb-4 rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-sm text-slate-200">
          Какая документация нужна для отгрузки листа 09Г2С?
        </div>
        <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-300">
            <Sparkles size={18} />
            Ответ по проверенным источникам
          </div>
          <p className="text-sm leading-6 text-slate-300">
            Для партии требуется сертификат качества производителя с указанием
            плавки, химического состава и механических свойств. Комплект
            документов формируется по активному регламенту отгрузки. Для
            нестандартных требований клиента запрос передаётся в отдел качества.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <SourceCard
              title="Регламент отгрузки"
              meta="Версия 3.2 · проверено 12.07.2026"
            />
            <SourceCard
              title="Карточка продукции 09Г2С"
              meta="Статус: active · владелец: ОТК"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Версия учтена", "Права проверены", "2 источника"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300"
            >
              {item}
            </span>
          ))}
        </div>
      </Panel>
    </div>
  );
}

function LogisticsMockup() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.85fr_1.45fr]">
      <Panel title="Входящие заявки" icon={Inbox}>
        <div className="space-y-3">
          <RequestCard
            active
            title="Москва → Казань"
            meta="ООО «Вектор» · 3 файла"
          />
          <RequestCard
            title="Тула → Санкт-Петербург"
            meta="МеталлСнаб · письмо"
          />
          <RequestCard
            title="Подольск → Самара"
            meta="ПромТех · Excel"
          />
        </div>
      </Panel>
      <Panel title="Заявка разобрана агентом" icon={Truck}>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoTile label="Маршрут" value="Москва → Казань" />
          <InfoTile label="Дата загрузки" value="31 июля, 09:00" />
          <InfoTile label="Груз" value="Оборудование, 8 паллет" />
          <InfoTile label="Вес" value="6 400 кг" />
        </div>
        <div className="my-4 flex items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-400/10 p-4">
          <AlertTriangle
            size={20}
            className="mt-0.5 flex-shrink-0 text-amber-300"
          />
          <div>
            <p className="text-sm font-semibold text-amber-200">
              Нужно уточнение
            </p>
            <p className="mt-1 text-sm text-amber-100/70">
              В заявке не указан тип кузова и способ верхней загрузки.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4">
          <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
            Черновик ответа клиенту
          </p>
          <p className="text-sm leading-6 text-slate-300">
            Заявку получили. Для точного расчёта, пожалуйста, уточните требуемый
            тип кузова и возможность верхней загрузки.
          </p>
          <div className="mt-4 flex gap-3">
            <MockButton icon={Send} text="Подтвердить и отправить" />
            <MockButton text="Редактировать" secondary />
          </div>
        </div>
      </Panel>
    </div>
  );
}

function SalesMockup() {
  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-3">
        <Panel title="Требования клиента" icon={MessageSquareText}>
          <Checklist
            items={[
              "Производительность: 12 м³/ч",
              "Температура среды: до 80 °C",
              "Питание: 380 В",
              "Доставка: Екатеринбург",
            ]}
          />
        </Panel>
        <Panel title="Подбор решения" icon={PackageCheck}>
          <p className="mb-3 font-semibold text-slate-100">Насос CM-PRO 12</p>
          <InfoRow label="Совместимость" value="96%" accent />
          <InfoRow label="На складе" value="7 шт." />
          <InfoRow label="Срок поставки" value="3–5 дней" />
          <InfoRow label="Источник" value="ERP + база знаний" />
        </Panel>
        <Panel title="Карточка CRM" icon={CircleDollarSign}>
          <InfoRow label="Компания" value="СтройИнжиниринг" />
          <InfoRow label="Стадия" value="Подготовка КП" accent />
          <InfoRow label="Потенциал" value="1,48 млн ₽" />
          <InfoRow label="Следующий шаг" value="Согласовать подбор" />
        </Panel>
      </div>
      <Panel title="Коммерческое предложение" icon={FileCheck2}>
        <div className="grid items-center gap-5 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-semibold text-slate-100">
              КП-2026-0742 · СтройИнжиниринг
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Комплектация, техническое обоснование, сроки и условия поставки
              собраны из актуальных источников.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <MockButton icon={FileText} text="Открыть черновик" secondary />
            <MockButton icon={Check} text="Передать менеджеру" />
          </div>
        </div>
      </Panel>
    </div>
  );
}

function ExecutiveMockup() {
  return (
    <div className="grid gap-5 xl:grid-cols-[0.7fr_1.5fr_0.9fr]">
      <Panel title="Рабочий день" icon={CalendarDays}>
        <TimelineItem time="09:30" title="Планёрка продаж" active />
        <TimelineItem time="11:00" title="Согласование бюджета" />
        <TimelineItem time="14:30" title="Встреча с поставщиком" />
        <TimelineItem time="17:00" title="Отчёт по филиалам" />
        <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-200">
          2 задачи требуют решения сегодня
        </div>
      </Panel>
      <Panel title="Личный ИИ-помощник" icon={Sparkles}>
        <div className="mb-4 flex gap-3 rounded-xl border border-slate-700 bg-slate-900 p-4">
          <Mic size={20} className="mt-0.5 text-red-300" />
          <p className="text-sm leading-6 text-slate-300">
            Подготовь сводку по просроченным сделкам, найди причины и предложи
            вопросы руководителям отделов к планёрке.
          </p>
        </div>
        <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4">
          <p className="mb-3 text-sm font-semibold text-slate-100">
            Сводка подготовлена
          </p>
          <Checklist
            items={[
              "Обнаружено 7 сделок без следующего шага",
              "В 4 сделках просрочено коммерческое предложение",
              "По 3 клиентам нет ответа более пяти рабочих дней",
            ]}
          />
          <div className="mt-4 rounded-lg bg-slate-800 p-3 text-sm text-slate-300">
            Сформированы вопросы руководителям и черновик повестки. Отправка
            ожидает вашего подтверждения.
          </div>
          <div className="mt-4 flex gap-3">
            <MockButton icon={Check} text="Подтвердить" />
            <MockButton text="Изменить" secondary />
          </div>
        </div>
      </Panel>
      <div className="space-y-5">
        <Panel title="Контроль" icon={Clock3}>
          <ControlItem icon={Mail} value="14" label="важных писем" />
          <ControlItem icon={FileText} value="3" label="документа на проверку" />
          <ControlItem icon={CalendarDays} value="2" label="встречи без повестки" />
        </Panel>
        <Panel title="Интеграции" icon={Database}>
          <div className="flex flex-wrap gap-2">
            {["Почта", "Календарь", "CRM", "Документы", "База знаний"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-300"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </Panel>
      </div>
    </div>
  );
}

function Panel({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-slate-700 bg-slate-800/50 p-4 md:p-5">
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-100">
        <Icon size={18} className="text-red-300" />
        {title}
      </div>
      {children}
    </section>
  );
}

function ChatBubble({
  side = "left",
  children,
}: {
  side?: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <div
      className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-6 ${
        side === "right"
          ? "ml-auto bg-red-500/20 text-red-50"
          : "bg-slate-700 text-slate-200"
      }`}
    >
      {children}
    </div>
  );
}

function ActionCard({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className={`rounded-lg border px-3 py-2 text-center text-sm ${
        active
          ? "border-red-400 bg-red-500/20 text-red-100"
          : "border-slate-600 text-slate-300"
      }`}
    >
      {label}
    </div>
  );
}

function InfoRow({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-700 py-2.5 text-sm last:border-0">
      <span className="text-slate-500">{label}</span>
      <span className={accent ? "text-emerald-300" : "text-right text-slate-200"}>
        {value}
      </span>
    </div>
  );
}

function MetricRow({ value, label }: { value: string; label: string }) {
  return (
    <div className="mb-3 flex items-baseline justify-between gap-3 last:mb-0">
      <span className="text-xl font-semibold text-slate-100">{value}</span>
      <span className="text-right text-xs text-slate-500">{label}</span>
    </div>
  );
}

function StatusLine({
  color,
  label,
  value,
}: {
  color: "emerald" | "amber" | "red";
  label: string;
  value: string;
}) {
  const colors = {
    emerald: "bg-emerald-400",
    amber: "bg-amber-400",
    red: "bg-red-400",
  };
  return (
    <div className="flex items-center gap-2 py-1.5 text-xs text-slate-400">
      <span className={`h-2 w-2 rounded-full ${colors[color]}`} />
      <span className="flex-grow">{label}</span>
      <span>{value}</span>
    </div>
  );
}

function SourceCard({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-800 p-3">
      <div className="flex items-start gap-2">
        <FileText size={16} className="mt-0.5 flex-shrink-0 text-red-300" />
        <div>
          <p className="text-sm text-slate-200">{title}</p>
          <p className="mt-1 text-xs text-slate-500">{meta}</p>
        </div>
      </div>
    </div>
  );
}

function RequestCard({
  title,
  meta,
  active = false,
}: {
  title: string;
  meta: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-3 ${
        active
          ? "border-red-400/40 bg-red-500/10"
          : "border-slate-700 bg-slate-900/40"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-200">{title}</p>
          <p className="mt-1 text-xs text-slate-500">{meta}</p>
        </div>
        <ChevronRight size={17} className="text-slate-500" />
      </div>
    </div>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-medium text-slate-200">{value}</p>
    </div>
  );
}

function MockButton({
  text,
  icon: Icon,
  secondary = false,
}: {
  text: string;
  icon?: React.ElementType;
  secondary?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold ${
        secondary
          ? "border border-slate-600 text-slate-300"
          : "bg-red-500 text-white"
      }`}
    >
      {Icon && <Icon size={15} />}
      {text}
    </span>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm leading-5 text-slate-300">
          <CheckCircle2
            size={16}
            className="mt-0.5 flex-shrink-0 text-emerald-400"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function TimelineItem({
  time,
  title,
  active = false,
}: {
  time: string;
  title: string;
  active?: boolean;
}) {
  return (
    <div className="flex gap-3 border-l border-slate-700 pb-4 pl-4 last:pb-0">
      <span
        className={`-ml-[21px] mt-1 h-2.5 w-2.5 rounded-full ${
          active ? "bg-red-400" : "bg-slate-600"
        }`}
      />
      <div>
        <p className="text-xs text-slate-500">{time}</p>
        <p className="mt-0.5 text-sm text-slate-200">{title}</p>
      </div>
    </div>
  );
}

function ControlItem({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="mb-3 flex items-center gap-3 last:mb-0">
      <span className="rounded-lg bg-slate-900 p-2 text-red-300">
        <Icon size={16} />
      </span>
      <div>
        <span className="font-semibold text-slate-100">{value}</span>
        <span className="ml-2 text-xs text-slate-500">{label}</span>
      </div>
    </div>
  );
}
