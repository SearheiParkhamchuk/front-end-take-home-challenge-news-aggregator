import { type ArticleRemoteSource } from '@/server/entities/news-sources/@types'

export type ArticleLocalSource = ArticleRemoteSource & {
  created_at: Date
  expire_at: Date
  uuid: string
}

export type ArticleLocalSourceDehydrated = ArticleLocalSource & {
  media: string
  source: string
}

export type ArticleSourceDTO = ArticleRemoteSource & {
  expire_at: Date
}
