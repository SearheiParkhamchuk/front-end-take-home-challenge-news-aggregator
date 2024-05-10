'use client'
import { useFetchArticles } from '@/04-features/articles/api/fetch-articles.client'
import { useArticlesView } from '@/05-entities/articles/lib/useArticlesView'
import Article from '@/05-entities/articles/ui/Article'
import { ARTICLE_ORIENTATION } from '@/05-entities/articles/ui/ArticleLayout/types'
import ArticlesGrid from '@/05-entities/articles/ui/ArticlesGrid'

import { useSearchParams } from '@/06-shared/lib/third-party/router/useSearchParams'
import { GRID_VIEW } from '@/06-shared/ui/GridViewButton/model'

import { getArticlesQueryParams } from '../../lib/get-articles-query-params'

function Articles() {
  const [view] = useArticlesView()
  const [searchParams] = useSearchParams()
  const { articles } = useFetchArticles(getArticlesQueryParams(searchParams))

  return (
    <ArticlesGrid view={view}>
      {articles.map((article) => (
        <Article
          alt={article.title}
          description={article.description}
          key={article.title}
          orientation={view === GRID_VIEW.GRID ? ARTICLE_ORIENTATION.VERTICAL : ARTICLE_ORIENTATION.HORIZONTAL}
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
