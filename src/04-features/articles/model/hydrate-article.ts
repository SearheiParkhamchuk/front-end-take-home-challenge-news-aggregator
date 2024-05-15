import { type Article, type ArticleSerialized } from '@/04-features/articles/model/@types'

export function hydrateArticle(serializedArticle: ArticleSerialized): Article {
  return {
    ...serializedArticle,
    publishedAt: new Date(serializedArticle.publishedAt)
  }
}
