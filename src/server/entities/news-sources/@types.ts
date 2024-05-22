export type ArticleRemoteSourceMedia = {
  height: string
  url: string
  width: string
}

export type ArticleRemoteSource = {
  media: {
    images: ArticleRemoteSourceMedia[]
  }
  published_at: Date
  source: string
  source_name: string
  title: string
  description?: string
  id?: string
  thumbnail?: string
}
