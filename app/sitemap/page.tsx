export default function SiteMapPage() {
  const sections: { href: string; label: string }[] = [
    { href: '/', label: 'Главная' },
    { href: '/biography', label: 'Биография' },
    { href: '/discography', label: 'Дискография' },
    { href: '/videos', label: 'Клипы' },
    { href: '/stories', label: 'Истории' },
    { href: '/photos', label: 'Фото' },
    { href: '/contact', label: 'Контакты' },
  ];

  return (
    <main className="container py-10 space-y-4">
      <h1 className="text-3xl font-bold">Карта сайта</h1>
      <ul className="list-disc pl-6 space-y-2">
        {sections.map((s) => (
          <li key={s.href}>
            <a className="underline" href={s.href}>{s.label}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
