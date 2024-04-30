import Article from '@/05-entities/articles/ui/Article'
import ArticlesGrid from '@/05-entities/articles/ui/ArticlesGrid'

import { type ArticlesProps } from './types'

function Articles({ articles }: ArticlesProps) {
  return (
    <ArticlesGrid >
      {articles.map((article) => (
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
