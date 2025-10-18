import { albums } from '@/lib/albums'
import TrackList from '@/components/content/TrackList'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default function AlbumPage({ params }:{ params:{ album:string }}) {
  const album = albums.find(a => a.slug === params.album)
  if (!album) return notFound()
  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-60 h-60 shrink-0">
          <Image src={album.cover} alt={album.title} fill className="object-cover rounded-xl" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{album.title}</h1>
          <p className="text-neutral-400">{album.year}</p>
          <div className="mt-6">
            <TrackList tracks={album.tracks} />
          </div>
        </div>
      </div>
    </div>
  )
}
