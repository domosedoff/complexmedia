# ComplexMedia — краткий бриф проекта

Актуальный подробный план и порядок продолжения: [PROJECT_PLAN.md](./PROJECT_PLAN.md).
Для передачи работы следующему чату сначала читать [NEXT_CHAT_HANDOFF.md](./NEXT_CHAT_HANDOFF.md).

## Продукт

«Комплекс Медиа» продаёт разработку и внедрение ИИ-решений для среднего бизнеса:
ИИ-чат-боты, ИИ-агенты, автоматизация отдела продаж, голосовой ИИ-консультант,
личный ИИ-помощник руководителя, корпоративная база знаний и платформа ИИ
Harness для цифровых сотрудников. Веб-разработка остаётся отдельной услугой.
Демонстрационные кейсы не выдавать за внедрения и не приписывать им отзывы или
достигнутые результаты.

## Технический контур

- Репозиторий: `domosedoff/complexmedia`; рабочая ветка — `master`.
- Рабочая папка Codex: `C:\Users\darvo\Documents\ComplexMedia Site\repo-hotfix`
  (исторический путь: `D:\yu\Codex\complexmedia site`).
- Стек: Next.js App Router, React, TypeScript, Tailwind CSS, React Email,
  Zod, Nodemailer и SSH/sendmail-транспорт формы.
- Production: `complexmedia.ru`, новый VPS `185.65.200.69`, пользователь
  `ubuntu`, каталог `/var/www/complexmedia`, Nginx → порт `3000`, сервис
  `complexmedia` под systemd. Старый VPS `45.67.32.233` считать скомпрометированным
  и не использовать для deploy.
- Mail VPS: `46.23.98.66`, пользователь `complexmedia_forn`; не менять Postfix,
  OpenDKIM, Dovecot, firewall и чужие каталоги.

## Рабочие правила

- Ponytail full: минимальные патчи, без новых зависимостей и архитектуры без
  необходимости.
- Перед правками: `git status --short`; чужой diff не перезаписывать.
- Перед deploy: локальные проверки, затем `/tmp/complexmedia.deploy.lock` через
  `flock`; сверить production-only изменения до fast-forward deploy.
- Секреты, пароли, приватные ключи, OAuth-коды и содержимое env-файлов не
  хранить в Git, `project_*`, handoff и выводе команд.
