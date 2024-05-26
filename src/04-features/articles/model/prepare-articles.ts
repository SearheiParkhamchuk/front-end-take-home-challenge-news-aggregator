import { type Article, type ArticleServer } from '@/04-features/articles/model/@types'
import { hydrateArticle } from '@/04-features/articles/model/hydrate-article'

export function prepareArticles(rawArticlesData: ArticleServer[]): Article[] {
  return rawArticlesData.map(hydrateArticle)
}
