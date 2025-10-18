import './globals.css'
import type { Metadata } from 'next'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: '2Pac — Памяти и наследию',
  description: 'Официальный сайт-посвящение 2Pac: биография, дискография, клипы, истории, фото',
  metadataBase: new URL('https://2pac.ru'),
  openGraph: { title: '2Pac — Памяти и наследию', type: 'website' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <Nav />
        <main className="min-h-[70dvh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
