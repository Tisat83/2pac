export type Track = { num: number; title: string; duration: string; excerpt?: string; lyricsUrl?: string; }
export type Album = { slug: string; title: string; cover: string; year: number; tracks: Track[] }

export const albums: Album[] = [
  {
    slug: "me-against-the-world",
    title: "Me Against the World",
    cover: "/images/albums/me-against-the-world.jpg",
    year: 1995,
    tracks: [
      { num: 1, title: "Intro", duration: "1:34" },
      { num: 2, title: "If I Die 2Nite", duration: "4:02", excerpt: "…иллюстративный короткий фрагмент…", lyricsUrl: "https://genius.com/" },
    ]
  },
  {
    slug: "all-eyez-on-me",
    title: "All Eyez on Me",
    cover: "/images/albums/all-eyez-on-me.jpg",
    year: 1996,
    tracks: [
      { num: 1, title: "Ambitionz Az a Ridah", duration: "4:39", excerpt: "…короткая цитата…", lyricsUrl: "https://genius.com/" },
      { num: 2, title: "All About U", duration: "4:37" }
    ]
  }
]
