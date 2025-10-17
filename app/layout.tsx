import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: '2pac — Легенда хип-хопа',
  description: 'Сайт, посвящённый Тупаку Шакуру — биография, музыка, жизнь.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="bg-light text-dark dark:bg-dark dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
