export type ArticleRemoteSourceMedia = {
  height: string
  url: string
  width: string
}

export type ArticleRemoteSource = {
  media: {
    images: ArticleRemoteSourceMedia[]
  }
  publishedAt: Date
  source: { name: string, src: string }
  title: string
  description?: string
  id?: string
  thumbnail?: string
}
