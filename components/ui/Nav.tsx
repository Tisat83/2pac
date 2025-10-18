import Link from 'next/link'

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/30">
      <nav className="container flex items-center justify-between h-14">
        <Link href="/" className="font-bold tracking-wide">2Pac</Link>
        <div className="flex items-center gap-4 text-sm text-neutral-200">
          <Link href="/biography">Биография</Link>
          <Link href="/discography">Дискография</Link>
          <Link href="/videos">Клипы</Link>
          <Link href="/stories">Истории</Link>
          <Link href="/photos">Фото</Link>
          <Link href="/contact">Контакты</Link>
        </div>
      </nav>
    </header>
  )
}
