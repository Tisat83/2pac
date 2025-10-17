import Link from 'next/link'

export default function BiographyTeaser() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-4">Краткая биография</h2>
      <p className="text-lg mb-6">
        Тупак Амару Шакур — актёр, поэт, революционер и величайший рэпер всех времён.
        Его музыка и слова вдохновляли поколения и продолжают звучать даже сегодня.
      </p>
      <Link href="/biography">
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded transition-colors">
          Читать полностью
        </button>
      </Link>
    </section>
  )
}
