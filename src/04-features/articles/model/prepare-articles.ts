import { type Article } from '@/04-features/articles/model/@types'
import { hydrateArticle } from '@/04-features/articles/model/hydrate-article'
import { type ArticleLocalSource } from '@/server/entities/articles-repository/@types'

export function prepareArticles(rawArticlesData: ArticleLocalSource[]): Article[] {
  return rawArticlesData.map(hydrateArticle)
}
