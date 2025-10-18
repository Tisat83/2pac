import Link from 'next/link'
import Image from 'next/image'

export function AlbumCard({ slug, title, cover, year }:{
  slug:string; title:string; cover:string; year:number
}) {
  return (
    <Link href={`/discography/${slug}`} className="group block rounded-xl overflow-hidden bg-white/5">
      <div className="relative aspect-square">
        <Image src={cover} alt={title} fill className="object-cover transition-transform duration-200 group-hover:scale-[1.02]" />
        <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition">
          <span className="px-3 py-2 rounded-lg bg-brand.accent text-black text-sm font-semibold">
            Посмотреть песни
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-neutral-400 text-sm">{year}</p>
      </div>
    </Link>
  )
}
