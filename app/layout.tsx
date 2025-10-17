import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: '2pac.ru',
  description: 'WIP — Next.js + TS + PWA',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
