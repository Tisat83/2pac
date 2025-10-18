import Hero from '@/components/content/Hero'
import { albums } from '@/lib/albums'
import { AlbumCard } from '@/components/content/AlbumCard'

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="container mt-12">
        <h2 className="text-2xl font-bold mb-4">Лучшие работы</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {albums.slice(0,4).map(a => (
            <AlbumCard key={a.slug} slug={a.slug} title={a.title} cover={a.cover} year={a.year} />
          ))}
        </div>
      </section>
    </>
  )
}
