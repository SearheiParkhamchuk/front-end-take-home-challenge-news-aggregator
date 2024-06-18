'use client'
import { useArticlesView } from 'src/04-features/articles-change-view/index.client'

import { ARTICLE_ORIENTATION } from 'src/05-entities/articles'
import { ArticlesGrid } from 'src/05-entities/articles/index.ui'
import { withSuspense } from 'src/06-shared/lib/utils/HOK/withSuspense'

import { GRID_VIEW } from 'src/06-shared/ui/GridViewButton/model'

import { type ArticlesProps } from './types'
import { useGetArticlesInfinite } from '../../api/useGetArticlesInfinite'

function ArticlePages({ loading, pages, renderItem }: ArticlesProps) {
  const [view] = useArticlesView()
  const inifinite = useGetArticlesInfinite()

  return (
    <ArticlesGrid loading={loading} view={view}>
      {pages.map((articles, pageIndex) => articles.map(
        (article, articleIndex) => renderItem(
          article,
          {
            page: inifinite.data.pageParams[pageIndex],
            pageIndex,
            articleIndex,
            orientation: view === GRID_VIEW.GRID ? ARTICLE_ORIENTATION.VERTICAL : ARTICLE_ORIENTATION.HORIZONTAL
          }))
      )}
    </ArticlesGrid>
  )
}

export default withSuspense(ArticlePages)
