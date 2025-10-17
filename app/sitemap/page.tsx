import Link from "next/link";
import type { Route } from "next";

const sections: { href: Route; label: string }[] = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/contacts", label: "Контакты" },
];

export const dynamic = "force-static";

export default function SiteMapPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Разделы</h1>
      <ul className="space-y-2">
        {sections.map((s) => (
          <li key={s.href}>
            <Link className="underline" href={s.href}>
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
