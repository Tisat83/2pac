import HeroBlock from '@/components/HeroBlock'
import BiographyBlock from '@/components/BiographyBlock'

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-8">
      <HeroBlock />
      <BiographyBlock />
    </main>
  )
}
