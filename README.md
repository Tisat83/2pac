# New Next.js + TS + Tailwind + PWA Starter

Готовый шаблон: App Router, TypeScript, Tailwind, PWA (next-pwa), API `/api/health`, Docker+Nginx и автодеплой через GitHub Actions.

## Быстрый старт (локально)
```bash
npm i
npm run dev
```

## Проверка здоровья
Откройте `http://localhost:3000/api/health` — вернёт JSON со статусом.

## PWA
В продакшне генерируется service worker. Манифест — `public/manifest.webmanifest`. Иконки — `public/icons/*`.

## Docker
```bash
docker build -t new-next-pwa-starter .
docker run -p 3000:3000 new-next-pwa-starter
```
Для nginx-прокси используйте `docker-compose.yml` и `nginx/nginx.conf` (порт 80/443).

## CI/CD
Workflow `.github/workflows/deploy.yml`:
- Сборка Next.js
- Сборка Docker-образа и пуш в GHCR
- SSH на сервер и `docker compose up -d`

Необходимые секреты в GitHub:
- `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY`, `DEPLOY_PATH` — доступ к серверу
- `GHCR_PAT` — персональный токен с правом `write:packages` (либо настройте разрешения GITHUB_TOKEN)

## Импорт контента
Дайте URL вашего старого сайта (или загрузите архив HTML), и мы перенесём разделы и тексты в новые страницы.
