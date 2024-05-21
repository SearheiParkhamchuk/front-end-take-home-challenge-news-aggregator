import { type Article } from '@/04-features/articles/model/@types'
import { type ArticleLocalSource } from '@/server/entities/articles-repository/@types'

export function hydrateArticle(serializedArticle: ArticleLocalSource): Article {
  return {
    ...serializedArticle,
    publishedAt: new Date(serializedArticle.publishedAt)
  }
}
