import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { clsx } from "clsx";

export const metadata: Metadata = {
  title: "New Site",
  description: "Next.js + TS + Tailwind + PWA starter",
  manifest: "/manifest.webmanifest",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  themeColor: "#111827"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={clsx("min-h-screen flex flex-col")}>
        <header className="border-b">
          <nav className="container py-3 flex gap-4">
            <Link href="/" className="font-semibold">Главная</Link>
            <Link href="/about">О нас</Link>
            <Link href="/contacts">Контакты</Link>
            <Link href="/sitemap">Разделы</Link>
          </nav>
        </header>
        <main className="container py-8 flex-1">{children}</main>
        <footer className="border-t text-sm text-gray-500">
          <div className="container py-6">© {new Date().getFullYear()} New Site</div>
        </footer>
      </body>
    </html>
  );
}
