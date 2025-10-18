export function SpotifyEmbed({ id }:{id:string}) {
  return (
    <iframe
      className="w-full h-80 rounded-xl"
      src={`https://open.spotify.com/embed/album/${id}`}
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
export function YouTubeEmbed({ id }:{id:string}) {
  return (
    <iframe
      className="w-full aspect-video rounded-xl"
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube player"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  )
}
