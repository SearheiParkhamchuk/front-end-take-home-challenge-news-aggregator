import { NewsApiArticleStrategy } from '@/05-entities/articles/api/strategies/NewsApiArticle.strategy'
import { TheGuardianStrategy } from '@/05-entities/articles/api/strategies/TheGuardian.strategy'

const newsApi = new NewsApiArticleStrategy()
const theGuardian = new TheGuardianStrategy()
const strategies = [newsApi, theGuardian]

export async function fetchArticles({ page, query }: { page?: string, query?: string }) {
  return await Promise.all(
    strategies.map(async s => await s.fetch({ page, query, pageSize: 6 }))
  )
}
