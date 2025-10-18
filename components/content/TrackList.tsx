'use client'
import { useState } from 'react'
import type { Track } from '@/lib/albums'

export default function TrackList({ tracks }:{ tracks:Track[] }) {
  const [open, setOpen] = useState<Track|null>(null)
  return (
    <>
      <ul className="divide-y divide-white/10">
        {tracks.map(t => (
          <li key={t.num} className="flex items-center justify-between py-3">
            <button onClick={() => setOpen(t)} className="text-left">
              <span className="text-neutral-200">{t.num}. {t.title}</span>
            </button>
            <span className="text-neutral-400 text-sm">{t.duration}</span>
          </li>
        ))}
      </ul>
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-6" onClick={() => setOpen(null)}>
          <div className="w-full max-w-xl rounded-2xl bg-neutral-900 p-6" onClick={e => e.stopPropagation()}>
            <h4 className="text-white font-bold mb-2">{open.title}</h4>
            {open.excerpt ? (
              <p className="text-neutral-200 mb-4 whitespace-pre-line">{open.excerpt}</p>
            ) : (
              <p className="text-neutral-400 mb-4">Фрагмент текста недоступен.</p>
            )}
            {open.lyricsUrl && (
              <a className="text-brand.primary underline" href={open.lyricsUrl} target="_blank" rel="noreferrer">
                Полный текст на официальном ресурсе
              </a>
            )}
            <button className="mt-6 px-4 py-2 bg-white/10 rounded-lg" onClick={() => setOpen(null)}>Закрыть</button>
          </div>
        </div>
      )}
    </>
  )
}
