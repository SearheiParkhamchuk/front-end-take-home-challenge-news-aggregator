import { type Article } from '@/05-entities/articles/api/types/Article'

export function mergeArticles<D extends { data: { articles: Article[] } | null }>(data: D[]) {
  return data.reduce<Article[]>((acc, response) => {
    const articles = response.data?.articles
    return articles ? [...acc, ...articles] : acc
  }, [])
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
}
