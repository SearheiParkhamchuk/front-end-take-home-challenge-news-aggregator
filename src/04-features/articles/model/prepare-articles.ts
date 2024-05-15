import { mergeArticles } from '@/04-features/articles/lib/merge-articles'
import { type Article, type ArticleSerializedResponseQueryMany } from '@/04-features/articles/model/@types'
import { hydrateArticle } from '@/04-features/articles/model/hydrate-article'

export function prepareArticles(rawArticlesData: ArticleSerializedResponseQueryMany[]): Article[] {
  const flattenArticles = mergeArticles(rawArticlesData)
  return flattenArticles.map(hydrateArticle)
}
