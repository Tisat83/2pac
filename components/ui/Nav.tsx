import Link from 'next/link'
import type { Route } from 'next'

const R = {
  home: '/' as Route,
  biography: '/biography' as Route,
  discography: '/discography' as Route,
  videos: '/videos' as Route,
  stories: '/stories' as Route,
  photos: '/photos' as Route,
  contact: '/contact' as Route,
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/30">
      <nav className="container flex items-center justify-between h-14">
        <Link href={R.home} className="font-bold tracking-wide">2Pac</Link>
        <div className="flex items-center gap-4 text-sm text-neutral-200">
          <Link href={R.biography}>Биография</Link>
          <Link href={R.discography}>Дискография</Link>
          <Link href={R.videos}>Клипы</Link>
          <Link href={R.stories}>Истории</Link>
          <Link href={R.photos}>Фото</Link>
          <Link href={R.contact}>Контакты</Link>
        </div>
      </nav>
    </header>
  )
}
