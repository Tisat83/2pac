import { YouTubeEmbed } from '@/components/ui/PlayerEmbed'

export default function VideosPage() {
  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-3xl font-bold">Клипы</h1>
      <YouTubeEmbed id="dQw4w9WgXcQ" />
    </div>
  )
}
