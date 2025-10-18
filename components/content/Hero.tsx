'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[80dvh] flex items-end md:items-center">
      <Image
        src="/images/2pac-hero.jpg"
        alt="2Pac portrait"
        fill
        priority
        className="object-cover opacity-70"
      />
      <div className="relative z-10 w-full container py-10 md:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-black tracking-tight text-white"
        >
          2Pac
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-neutral-200"
        >
          Культовый художник слова, чьё наследие вдохновляет поколения. Узнайте его историю и работы.
        </motion.p>
        <div className="mt-8 flex gap-3">
          <Link href="/biography" className="px-5 py-3 bg-brand.primary text-black font-medium rounded-lg">
            Полная биография
          </Link>
          <Link href="/discography" className="px-5 py-3 bg-white/10 backdrop-blur rounded-lg">
            С чего начать
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  )
}
