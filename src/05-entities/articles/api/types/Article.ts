export type Article = {
  description: string
  publishedAt: Date
  source: { name: string, src: string }
  thumbnail: string | null
  title: string
}
