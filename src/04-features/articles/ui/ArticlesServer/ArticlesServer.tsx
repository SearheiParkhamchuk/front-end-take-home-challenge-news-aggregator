'use server'

import { NewsApiArticleStrategy } from '@/05-entities/articles/api/strategies/NewsApiArticle.strategy'
import { TheGuardianStrategy } from '@/05-entities/articles/api/strategies/TheGuardian.strategy'

import Articles from '../Articles'

const newsApi = new NewsApiArticleStrategy()
const theGuardian = new TheGuardianStrategy()

const strategies = [newsApi, theGuardian]

async function ArticlesServer({ page }: { page?: string }) {
  const [newsApiResponse, theGuardianResponse] = await Promise.all(strategies.map(async s => await s.fetch({ page })))

  const articles = [...newsApiResponse.data?.articles ?? [], ...theGuardianResponse.data?.articles ?? []]
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())

  return (<Articles articles={articles} />)
}

export default ArticlesServer
