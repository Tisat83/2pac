'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-black text-white overflow-hidden">
      <Image
        src="/2pac-hero.jpg"
        alt="2Pac"
        fill
        priority
        className="object-cover opacity-50"
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">2Pac</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Кумир миллионов. Символ борьбы, свободы и голоса улиц.
        </p>
      </div>
    </section>
  )
}
