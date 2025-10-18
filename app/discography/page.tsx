import { albums } from '@/lib/albums'
import { AlbumCard } from '@/components/content/AlbumCard'

export default function DiscographyPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Дискография</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {albums.map(a => (
          <AlbumCard key={a.slug} slug={a.slug} title={a.title} cover={a.cover} year={a.year} />
        ))}
      </div>
    </div>
  )
}
