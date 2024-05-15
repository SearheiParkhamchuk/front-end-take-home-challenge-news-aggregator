'use client'

import { useCallback } from 'react'

import { useFetchArticlesInfinite } from '@/04-features/articles/api/fetch-articles-infinite.client'
import { prepareArticles } from '@/04-features/articles/model/prepare-articles'
import { useArticlesSearchParams } from '@/04-features/articles/model/useArticlesSearchParams'
import Articles from '@/04-features/articles/ui/Articles'
import LoadMore from '@/04-features/articles/ui/LoadMore'
import ArticlesGridView from '@/04-features/articles-view/ui/ArticlesGridView'
import ArticlesGridViewSkeleton from '@/04-features/articles-view/ui/ArticlesGridViewSkeleton'
import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/model/search-params-keys'
import NotFound from '@/05-entities/app/ui/NotFound'
import { ARTICLE_ORIENTATION } from '@/05-entities/articles/model/article-orientation'
import { withSuspense } from '@/06-shared/lib/utils/HOK/withSuspense'
import { GRID_VIEW } from '@/06-shared/ui/GridViewButton/model'
import InfiniteScroll from '@/06-shared/ui/InfiniteScroll'
import Stack from '@/06-shared/ui/Stack'

function ArticlesClient() {
  const [searchParams, { set }] = useArticlesSearchParams()
  const onPage = useCallback((page: string) => { set({ [SEARCH_PARAMS_KEYS.A_PAGE]: page }) }, [set])

  const inifinite = useFetchArticlesInfinite(searchParams)
  const noArticlesFound = inifinite.data.pages.map(prepareArticles).flat().length === 0

  if (inifinite.isLoading) return <ArticlesGridViewSkeleton />
  if (noArticlesFound || !inifinite.data) return <NotFound title='No articles found' />

  return (
    <Stack>
      <InfiniteScroll reobserveOnChange={inifinite.data} onLastPage={inifinite.fetchNextPage} onPage={onPage}>
        {({ page }) => (
          <ArticlesGridView>
            {({ view }) => (
              <Articles
                orientation={view === GRID_VIEW.GRID ? ARTICLE_ORIENTATION.VERTICAL : ARTICLE_ORIENTATION.HORIZONTAL}
                renderItem={(article, options) => <div {...page(options.page)}>{article}</div>}
              />
            )}
          </ArticlesGridView>
        )}
      </InfiniteScroll>
      <Stack align='center'>
        <LoadMore />
      </Stack>
    </Stack>
  )
}

export default withSuspense(ArticlesClient)
