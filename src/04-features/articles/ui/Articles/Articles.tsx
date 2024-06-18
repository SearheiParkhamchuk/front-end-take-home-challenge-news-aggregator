'use client'
import { ARTICLE_ORIENTATION, type ArticleClient } from 'src/05-entities/articles'

import { articlesClientApi } from 'src/05-entities/articles/index.client'
import { Article, ArticlesGrid } from 'src/05-entities/articles/index.ui'
import { withSuspense } from 'src/06-shared/lib/utils/HOK/withSuspense'
import { GRID_VIEW } from 'src/06-shared/ui/GridViewButton/model'

import { type ArticleRenderOptions, type ArticlesProps } from './types'

function Articles({ view, params, renderItem }: ArticlesProps) {
  const inifinite = articlesClientApi.useGetArticlesInfinite(params)
  const articlePages = inifinite.data.pages
  const articlesLoading = inifinite.isFetching && !(inifinite.isFetchingNextPage || inifinite.isFetchingNextPage)

  const articleRenderer = (article: ArticleClient) => (
    <Article
      alt={article.title}
      description={article.description ?? ''}
      key={article.uuid}
      orientation={view === GRID_VIEW.GRID ? ARTICLE_ORIENTATION.VERTICAL : ARTICLE_ORIENTATION.HORIZONTAL}
      poster={article.thumbnail ?? article.media.images[0]?.url ?? null}
      publishedAt={article.published_at}
      source={article.source_url}
      sourceName={article.source_name}
      title={article.title}
    />
  )

  return (
    <ArticlesGrid loading={articlesLoading} view={view}>
      {articlePages.map((articles, pageIndex) => articles.map(
        (article, articleIndex) => {
          const renderOptions: ArticleRenderOptions = { page: inifinite.data.pageParams[pageIndex], pageIndex, articleIndex }
          const render = articleRenderer(article)
          return renderItem ? renderItem(render, renderOptions) : render
        })
      )}
    </ArticlesGrid>
  )
}

export default withSuspense(Articles)
