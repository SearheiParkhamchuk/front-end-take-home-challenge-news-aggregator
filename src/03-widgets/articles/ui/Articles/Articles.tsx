'use server'
import Article from '@/05-entities/articles/ui/Article'
import ArticlesGrid from '@/05-entities/articles/ui/ArticlesGrid'

import { type ArticlesProps } from './types'
import { NewsApiArticleStrategy } from '../../api/strategies/NewsApiArticle.strategy'
import { TheGuardianStrategy } from '../../api/strategies/TheGuardian.strategy'

const newsApi = new NewsApiArticleStrategy()
const theGuardian = new TheGuardianStrategy()

const strategies = [newsApi, theGuardian]

async function Articles({ ...rest }: ArticlesProps) {
  const [newsApiResponse, theGuardianResponse] = await Promise.all(strategies.map(async s => await s.fetch()))

  const news = [...newsApiResponse.data?.articles ?? [], ...theGuardianResponse.data?.articles ?? []]

  return (
    <ArticlesGrid {...rest}>
      {news.map((article) => (
        <Article
          alt={article.title}
          description={article.description}
          key={article.title}
          publishedAt={article.publishedAt}
          source={article.source}
          src={article.thumbnail}
          title={article.title}
        />
      ))}
    </ArticlesGrid>
  )
}

export default Articles
