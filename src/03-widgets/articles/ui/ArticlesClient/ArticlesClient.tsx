'use client'

import { useCallback } from 'react'

import { useFetchArticlesInfinite } from '@/04-features/articles/api/articles-infinite/fetch-articles-infinite.client'
import { prepareArticles } from '@/04-features/articles/model/prepare-articles'
import { useArticlesSearchParams } from '@/04-features/articles/model/useArticlesSearchParams'
import Articles from '@/04-features/articles/ui/Articles'
import LoadNextPage from '@/04-features/articles/ui/LoadNextPage'
import LoadPreviousPage from '@/04-features/articles/ui/LoadPreviousPage'
import ArticlesGridView from '@/04-features/articles-view/ui/ArticlesGridView'
import ArticlesGridViewSkeleton from '@/04-features/articles-view/ui/ArticlesGridViewSkeleton'
import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/model/search-params-keys'
import { ARTICLE_ORIENTATION } from '@/05-entities/articles/model/article-orientation'
import { withSuspense } from '@/06-shared/lib/utils/HOK/withSuspense'
import Alert from '@/06-shared/ui/Alert'
import { GRID_VIEW } from '@/06-shared/ui/GridViewButton/model'
import InfiniteScroll from '@/06-shared/ui/InfiniteScroll'
import PageError from '@/06-shared/ui/PageError'
import ScrollToTop from '@/06-shared/ui/ScrollToEdge'
import Stack from '@/06-shared/ui/Stack'

function ArticlesClient() {
  const [searchParams, { set }] = useArticlesSearchParams()
  const onPage = useCallback((page: string) => { set({ [SEARCH_PARAMS_KEYS.A_PAGE]: page }) }, [set])

  const inifinite = useFetchArticlesInfinite(searchParams)
  const noArticlesFound = inifinite.data.pages.map((d) => prepareArticles(d.data)).flat().length === 0

  if (inifinite.isLoading) return <ArticlesGridViewSkeleton />
  if (noArticlesFound || !inifinite.data) return <PageError title='No articles found' />

  return (
    <Stack>
      <ScrollToTop />
      {inifinite.error && <Alert variant='error'>{inifinite.error.message}</Alert>}
      {inifinite.hasPreviousPage && <Stack align='center'><LoadPreviousPage /></Stack>}
      <InfiniteScroll reobserveOnChange={inifinite.data} onLastPage={inifinite.fetchNextPage} onPage={onPage}>
        {({ page }) => (
          <ArticlesGridView>
            {({ view }) => (
              <Articles
                orientation={view === GRID_VIEW.GRID ? ARTICLE_ORIENTATION.VERTICAL : ARTICLE_ORIENTATION.HORIZONTAL}
                renderItem={(article, options) => (
                  <div
                    key={article.key}
                    {...(options.articleIndex === 0 && page(options.page))}
                  >
                    {article}
                  </div>
                )}
              />
            )}
          </ArticlesGridView>
        )}
      </InfiniteScroll>
      <Stack align='center'><LoadNextPage /></Stack>
    </Stack>
  )
}

export default withSuspense(ArticlesClient)
