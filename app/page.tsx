export default function Page() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Добро пожаловать</h1>
      <p>Это стартовый шаблон (Next.js + TypeScript + Tailwind + PWA) с API /health, Docker+Nginx и автодеплоем через GitHub Actions.</p>
      <ul className="list-disc pl-6">
        <li>PWA: офлайн-кэш базовых ресурсов</li>
        <li>Проверка здоровья: <code>/api/health</code></li>
        <li>Готово к Docker и nginx‑reverse‑proxy</li>
      </ul>
    </section>
  );
}
