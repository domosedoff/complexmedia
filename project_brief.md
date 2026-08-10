# ComplexMedia — project brief

- Сайт компании «Комплекс Медиа»: услуги веб-разработки, ИИ-ботов, ИИ-агентов и корпоративного цифрового актива.
- Стек: Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, Nodemailer + SSH/sendmail, React Email, Zod.
- Production: `complexmedia.ru`, VPS `185.65.200.69`, каталог `/var/www/complexmedia`, Nginx → Next.js на `localhost:3000`, systemd-сервис `complexmedia`.
- Репозиторий: `domosedoff/complexmedia`. Рабочая ветка проекта — `master`; default-ветка `main` почти пуста.
- Локальная рабочая папка: `D:\yu\Codex\complexmedia site`.

## Границы работы

- Ponytail full: минимальные безопасные изменения, без новых зависимостей и архитектуры без необходимости.
- Перед правками: `git status --short`; чужие и production-only изменения не перезаписывать.
- Перед deploy: брать lock через `flock /tmp/complexmedia.deploy.lock`.
- Production менять только после проверки локального diff/build и явной сверки незакоммиченных файлов на VPS.
- Секреты не коммитить и не выводить в handoff/state-файлы.
