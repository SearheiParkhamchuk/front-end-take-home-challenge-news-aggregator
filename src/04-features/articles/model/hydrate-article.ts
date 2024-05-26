import { type Article, type ArticleServer } from '@/04-features/articles/model/@types'

export function hydrateArticle(serializedArticle: ArticleServer): Article {
  return {
    ...serializedArticle,
    published_at: new Date(serializedArticle.published_at)
  }
}
