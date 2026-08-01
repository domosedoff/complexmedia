# Next chat handoff

- Публичные изменения без дашборда отправлены в GitHub `master`, коммит
  `8641328`. Проверка production после push: `/articles` и
  `/services/ai-sales-automation` отвечают `404`, автодеплоя нет.
- Следующее обязательное действие — получить рабочий SSH-ключ/пароль для
  `ubuntu@45.67.32.233` и задеплоить `8641328` под deploy-lock, сохранив
  production-only файлы. Дашборд в этот deploy не включать.

- Рабочая папка: `D:\yu\Codex\complexmedia site`; ветка `master`, HEAD `c676a64`, локально чисто до добавления project-файлов.
- Production: `45.67.32.233:/var/www/complexmedia`, PM2 `complexmedia`, Nginx, порт `3000`.
- Production deploy выполнен 2026-07-30; PM2 online, публичные маршруты и форма
  проверены.
- Сначала выполнить `git status --short` локально и на VPS.
- На VPS уже есть чужой dirty diff: `next.config.ts`, `tsconfig.json`, `ecosystem.config.js`, три файла `public/`; не перезаписывать.
- GitHub default `main` почти пуст, рабочая ветка — `master`.
- Перед deploy использовать `flock /tmp/complexmedia.deploy.lock`.
- Ponytail full активен.
- Локально Resend заменён на Nodemailer + прямой SSH/sendmail.
- Mail server: `mail.cmedia-lead.ru` (`46.23.98.66`), пользователь `complexmedia_forn`, без sudo.
- Отдельный wrapper удалён: Nodemailer запускает системный `ssh` напрямую; приватный ключ не коммитить.
- Mail-ключ находится на web-VPS в
  `/home/ubuntu/.ssh/complexmedia_forn_mail_vps_ed25519`, mode `600`.
- Одно техническое письмо принято mail-сервером, очередь после отправки пуста.
- Локальный API формы проверен: `POST /api/send-email` → `200`.
- Все ссылки на `https://t.me/complexmedia_bot` и связанные CTA удалены.
- Добавлен consent-баннер; Яндекс Метрика не загружается до согласия.
- Политика конфиденциальности обновлена в части аналитики и cookie.
- На главной добавлены пять кейсов, бизнес-аудит и ссылка «Кейсы» в навигации.
- Кейсы доступны по `/cases/<slug>`, интерфейсы для скриншотов —
  `/cases/<slug>/demo`; demo-страницы закрыты от индексации.
- Добавлен кейс личного ИИ-помощника руководителя и соответствующий блок на
  странице ИИ-агентов; в кейсе естественно упомянуты AI Harness и Hermes.
- Тексты кейсов уточнены, а блок бизнес-анализа индивидуализирован для каждой
  отрасли.
- SEO-база готова: уникальные metadata и canonical, Open Graph/Twitter,
  Organization/WebSite, BreadcrumbList, robots и полный Sitemap.
- Удалён дублирующий `public/favicon.ico`, вызывавший 500; используется
  `src/app/favicon.ico`.
- После кейсов и SEO проходят TypeScript, ESLint, `git diff --check`, проверка
  metadata/H1/внутренних ссылок и локальных маршрутов;
  полный production build повторить перед deploy.
- Preview запущен на `http://127.0.0.1:3001`.
- Изменения задеплоены, но локально и на GitHub не коммитились.
- Backup перед deploy:
  `/home/ubuntu/complexmedia-backup-20260730-095742.tar.gz`.
- Production-only `public/favicon.ico` нужен из-за Nginx location для `.ico`;
  локально этот дубль удалён, чтобы Next.js 15 не возвращал конфликт.
- Новый локальный этап SEO ещё не деплоился: см. `SEO_SEMANTIC_MAP.md`.
- Wordstat собран 2026-07-30 за период 29.06.2026–28.07.2026. Главные
  кластеры: внедрение ИИ в бизнес, ИИ-агенты для бизнеса, ИИ-чат-боты,
  корпоративная база знаний, ИИ для отдела продаж и ИИ-помощник руководителя.
- Локально обновлены H1/metadata главной и услуг, а CTA конкретизированы по
  каждой услуге. Preview: `http://127.0.0.1:3001`.
- Перед следующим deploy показать локальный результат пользователю и получить
  отдельное подтверждение; затем использовать deploy-lock.
- Последний production SEO-deploy выполнен 2026-07-30; PM2 `complexmedia`
  online. Backup: `/home/ubuntu/complexmedia-source-pre-seo-20260730-154022.tar.gz`
  и `/home/ubuntu/complexmedia-runtime-pre-seo-20260730-154022.tar.gz`.
- Яндекс Вебмастер: сайт подтверждён HTML-файлом, sitemap отправлен, главная и
  четыре услуги поставлены в очередь на переобход.
- Google Search Console: URL-prefix property подтверждён, sitemap отправлен,
  главная уже находится в индексе.
- `public/yandex_580a296a69f9c90a.html` не удалять: файл сохраняет
  подтверждение прав Яндекс Вебмастера.
- В Яндекс Метрике создана цель «Успешная отправка формы»:
  `contact_form_success`; локальный код вызывает её только после `200` API и
  `result.success`.
- Локально создана `/services/ai-sales-automation`, добавлена в главную,
  навигацию услуг, контактную форму и sitemap. TypeScript, ESLint,
  `git diff --check`, production build и локальные `200` проходят.
- В Header добавлено нативное `<details>`-меню услуг, в MobileMenu — те же
  прямые ссылки. Desktop-клик, переход на «ИИ для продаж» и mobile проверены.
- Локально создана `/services/executive-ai-assistant` с отдельным интентом
  личного ИИ-помощника руководителя; добавлены ссылки с главной,
  `/services/ai-agents`, меню и формы, а также ссылка на кейс и запись в sitemap.
- После добавления страницы production build Next.js 15.3.1 сгенерировал 26
  страниц; TypeScript, ESLint, `git diff --check`, desktop/mobile и локальные
  маршруты проходят.
- Локально создана `/services/ai-consulting`, добавлена на главную, в Header,
  MobileMenu, ServiceNavigation, форму и sitemap; из блока бизнес-аудита на
  главной добавлена контекстная ссылка.
- Для ИИ-консалтинга TypeScript, ESLint, `git diff --check`, desktop/mobile и
  локальные `200` проходят. Полный build после этой последней страницы
  повторить один раз непосредственно перед deploy.
- Локально создано руководство `/articles/ai-implementation-business` с
  Article/FAQ/Breadcrumb schema, CTA на ИИ-консалтинг и форму и внутренними
  ссылками с Hero, Footer и страницы ИИ-консалтинга; добавлено в sitemap.
- Для статьи TypeScript, ESLint, `git diff --check`, schema, sitemap,
  desktop/mobile и локальный `200` проходят. Production не менялся.
- Локально создана `/articles/ai-for-sales`; статья связана с
  `/services/ai-sales-automation`, кейсом `/cases/equipment-sales`, Footer и
  sitemap. Article/FAQPage/BreadcrumbList schema присутствуют.
- Для новой статьи проходят TypeScript, ESLint, `git diff --check`, локальный
  `200`, desktop/mobile и проверка отсутствия горизонтального переполнения.
- Локально создана `/articles/corporate-knowledge-base`; добавлены schema,
  ссылка с `/services/digital-asset`, CTA на услугу и кейс
  `/cases/metal-production`, Footer и sitemap.
- Для статьи о базе знаний проходят TypeScript, ESLint, `git diff --check`,
  локальные `200`, desktop/mobile и проверка консоли.
- Локально создана `/articles/ai-agent-vs-chatbot`; добавлены Article,
  FAQPage и BreadcrumbList schema, ссылки с `/services/ai-agents` и
  `/services/ai-bots`, ссылки на два кейса, Footer и sitemap.
- Для сравнительной статьи проходят TypeScript, ESLint, `git diff --check`,
  локальные `200`, desktop/mobile, проверка ссылок и консоли.
- Локально создан `/articles` с четырьмя карточками и ItemList schema. Ссылка
  «Статьи» добавлена в Header, MobileMenu и Footer, маршрут — в sitemap.
- Индекс статей проверен на 1280/900/768/390 px; навигация, CTA, отсутствие
  переполнения, TypeScript, ESLint, `git diff --check` и консоль проходят.
- Dev-preview запущен на `127.0.0.1:3001`; его процесс может остановиться
  после завершения среды, тогда запускать `npm.cmd run dev -- --port 3001`.
- Финальный production build Next.js 15.3.1 прошёл: 32 страницы.
- Проверка sitemap: 21/21 индексируемых URL отвечают `200`, имеют один H1 и
  один canonical.
- В Яндекс Вебмастер загружены 30 целевых запросов. Google Search Console пока
  обрабатывает данные; Яндекс ещё не показывает позиции и клики.
- Метрика за 1–30 июля: 170 визитов, 129 посетителей, 3 поисковых визита.
  Прямые отчёты и еженедельный регламент — `SEO_MONITORING.md`.
- Контентный план 4/4 завершён; следующие материалы выбирать только по
  фактическим запросам с показами.
- Preview для согласования:
  `http://127.0.0.1:3001/articles`.
- Новая страница и событие Метрики ещё не деплоились. После просмотра получить
  отдельное разрешение пользователя и только затем выполнять deploy под lock.
- Локально готов `/seo-dashboard`; preview:
  `http://localhost:3001/seo-dashboard`. Дашборд закрыт Basic Auth через
  `SEO_DASHBOARD_USER`/`SEO_DASHBOARD_PASSWORD`, имеет `noindex, nofollow`, не
  добавлен в меню и sitemap.
- Проверки дашборда: production build — 33 страницы; без авторизации `401`, с
  авторизацией `200`; desktop/mobile и отсутствие внешнего overflow проходят.
- Пользователь разрешил deploy SEO-пакета, но прежний пароль пользователя
  `ubuntu` на web VPS больше не принимается. Нужен актуальный пароль или
  SSH-ключ; до этого не повторять перебор и не менять production.
- Разрешение на deploy основного SEO-пакета не считать разрешением публиковать
  новый дашборд: сначала показать его пользователю и отдельно согласовать
  production-доступ и постоянные учётные данные.
- После обратной связи пользователя период дашборда выбирается календарями;
  добавлена таблица всех 30 запросов с колонками Google/Яндекс и
  динамикой за день/неделю. До получения первых данных позиции показываются
  как «—», без выдуманных значений.
- SSH-диагностика без новой попытки пароля: `45.67.32.233:22` доступен,
  аутентификация `publickey,password` разрешена. Значит, блокировка не вызвана
  отключением парольного входа; не перебирать пароль.
- Локальный preview `/seo-dashboard` обновлён: выбор дат, статусы API,
  дневная динамика Google/Яндекс и блок реальных новых запросов. Google API
  подключён и отвечает, но Search Console пока возвращает пустой набор.
- Google JSON-ключ находится вне Git. Для запуска указать
  `GOOGLE_SEARCH_CONSOLE_CREDENTIALS_FILE`; не копировать ключ в проект.
- Яндекс OAuth-приложение и read-only consent созданы, но обмен кода на
  `YANDEX_OAUTH_TOKEN` требует одного ручного безопасного шага. Не публиковать
  Client secret, код или токен в Git/чатах.
- 01.08.2026 пользователь разрешил production-деплой всего SEO-пакета и
  защищённого дашборда. Сначала закоммитить/отправить оставшиеся файлы.
- GitHub Actions deploy готов, но до рабочего SSH deploy-key job будет безопасно
  пропускаться. Прежний пароль `ubuntu` не перебирать: он уже отклонён.
- OAuth-приложению добавлено `webmaster:verify`; новый токен не сохранять без
  явного согласия пользователя, потому что право также позволяет добавлять сайты.
