import { type ArticleRemoteSource } from '@/server/entities/news-sources/@types'

export type ArticleLocalSource = ArticleRemoteSource & {
  createdAt: Date
  expireAt: Date
  uuid: string
}

export type ArticleLocalSourceDehydrated = ArticleLocalSource & {
  media: string
  source: string
}

export type ArticleSourceDTO = ArticleRemoteSource & {
  expireAt: Date
}
