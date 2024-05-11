'use client'
import { useFetchArticles } from '@/04-features/articles/api/fetch-articles.client'
import NotFound from '@/05-entities/app/ui/NotFound'
import { useArticlesView } from '@/05-entities/articles/lib/useArticlesView'
import Article from '@/05-entities/articles/ui/Article'
import { ARTICLE_ORIENTATION } from '@/05-entities/articles/ui/ArticleLayout/types'
import ArticlesGrid from '@/05-entities/articles/ui/ArticlesGrid'

import { useSearchParams } from '@/06-shared/lib/third-party/router/useSearchParams'
import { GRID_VIEW } from '@/06-shared/ui/GridViewButton/model'

import { getArticlesQueryParams } from '../../lib/get-articles-query-params'
import ArticlesSkeleton from '../ArticlesSkeleton'

function Articles() {
  const [view] = useArticlesView()
  const [searchParams] = useSearchParams()
  const { articles, isFetching } = useFetchArticles(getArticlesQueryParams(searchParams))

  if (isFetching) return <ArticlesSkeleton />
  if (articles.length === 0) return <NotFound title='No articles found' />

  return (
    <ArticlesGrid view={view}>
      {articles.map((article, index) => (
        <Article
          alt={article.title}
          description={article.description}
          key={index}
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
