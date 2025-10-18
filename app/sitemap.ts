export default async function sitemap() {
  const base = 'https://2pac.ru'
  return [
    { url: base, lastModified: new Date() },
    { url: base + '/biography' },
    { url: base + '/discography' },
    { url: base + '/videos' },
    { url: base + '/stories' },
    { url: base + '/photos' },
    { url: base + '/contact' }
  ]
}
