'use server'

import Articles from '@/04-features/articles/ui/Articles'
import { NewsApiArticleStrategy } from '@/05-entities/articles/api/strategies/NewsApiArticle.strategy'
import { TheGuardianStrategy } from '@/05-entities/articles/api/strategies/TheGuardian.strategy'
import { type Article } from '@/05-entities/articles/api/types/Article'
import Alert from '@/06-shared/ui/Alert'

const newsApi = new NewsApiArticleStrategy()
const theGuardian = new TheGuardianStrategy()

const strategies = [newsApi, theGuardian]

async function ArticlesServer({ page, query }: { page?: string, query?: string }) {
  const articleResponses = await Promise.all(
    strategies.map(async s => await s.fetch({ page, query }))
  )

  const articles = articleResponses.reduce<Article[]>((acc, response) => {
    const articles = response.data?.articles
    return articles ? [...acc, ...articles] : acc
  }, [])
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())

  const errors = articleResponses.reduce<Error[]>((acc, response) => response.error ? [...acc, response.error] : acc, [])

  return (
    <>
      {!!errors.length && errors.map((e, index) => <Alert key={index} severity='error'>{e.message}</Alert>)}
      <Articles articles={articles} />
    </>
  )
}

export default ArticlesServer
