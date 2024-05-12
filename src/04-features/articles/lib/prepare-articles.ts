import { type Article, type ArticleSerializedResponseQueryMany } from '@/05-entities/articles/api/@types'
import { hydrateArticle } from '@/05-entities/articles/lib/hydrate-article'
import { mergeArticles } from '@/05-entities/articles/lib/merge-articles'

export function prepareArticles(rawArticlesData: ArticleSerializedResponseQueryMany[]): Article[] {
  const flattenArticles = mergeArticles(rawArticlesData)
  return flattenArticles.map(hydrateArticle)
}
