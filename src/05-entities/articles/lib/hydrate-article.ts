import { type Article, type ArticleSerialized } from '@/05-entities/articles/api/@types'

export function hydrateArticle(serializedArticle: ArticleSerialized): Article {
  return {
    ...serializedArticle,
    publishedAt: new Date(serializedArticle.publishedAt)
  }
}
