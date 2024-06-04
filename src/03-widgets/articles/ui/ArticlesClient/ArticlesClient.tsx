'use client'
import { useCallback } from 'react'

import { useFetchArticlesInfinite } from 'src/04-features/articles/api/articles-infinite/fetch-articles-infinite.client'
import { ARTICLES_DEFAULT_PAGE } from 'src/04-features/articles/model/default-page'
import { prepareArticles } from 'src/04-features/articles/model/prepare-articles'
import { useArticlesSearchParams } from 'src/04-features/articles/model/useArticlesSearchParams'
import Articles from 'src/04-features/articles/ui/Articles'
import LoadNextPage from 'src/04-features/articles/ui/LoadNextPage'
import LoadPreviousPage from 'src/04-features/articles/ui/LoadPreviousPage'
import { useArticlesView } from 'src/04-features/articles-view/model/useArticlesView'
import ArticlesGridView from 'src/04-features/articles-view/ui/ArticlesGridView'
import { SEARCH_PARAMS_KEYS } from 'src/05-entities/app/model/search-params-keys'
import { ARTICLE_ORIENTATION } from 'src/05-entities/articles/model/article-orientation'
import { withSuspense } from 'src/06-shared/lib/utils/HOK/withSuspense'
import Alert from 'src/06-shared/ui/Alert'
import { GRID_VIEW } from 'src/06-shared/ui/GridViewButton/model'
import InfiniteScroll from 'src/06-shared/ui/InfiniteScroll'
import PageError from 'src/06-shared/ui/LayoutNotFoundError'
import ScrollToTop from 'src/06-shared/ui/ScrollToEdge'
import Stack from 'src/06-shared/ui/Stack'

function ArticlesClient() {
  const [searchParams, { set, remove }] = useArticlesSearchParams()
  const [view] = useArticlesView()
  const onPage = useCallback((page: string) => {
    if (page === ARTICLES_DEFAULT_PAGE) remove(SEARCH_PARAMS_KEYS.A_PAGE)
    else set({ [SEARCH_PARAMS_KEYS.A_PAGE]: page })
  }, [set, remove])

  const inifinite = useFetchArticlesInfinite(searchParams)
  const articlePages = inifinite.data.pages.map((d) => prepareArticles(d.data))
  const noArticlesFound = articlePages.flat().length === 0

  if (noArticlesFound) return <PageError title='No articles found' />
  const articlesLoading = inifinite.isFetching && (!inifinite.isFetchingNextPage && !inifinite.isFetchingNextPage)

  return (
    <Stack>
      <ScrollToTop />
      {inifinite.error && <Alert variant='error'>{inifinite.error.message}</Alert>}
      {inifinite.hasPreviousPage && <Stack align='center'><LoadPreviousPage /></Stack>}
      <InfiniteScroll reobserveOnChange={inifinite.data} onLastPage={inifinite.fetchNextPage} onPage={onPage}>
        {({ page }) => (
          <ArticlesGridView loading={articlesLoading} view={view}>
            <Articles
              data={{ pages: articlePages, pageParams: inifinite.data.pageParams }}
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
          </ArticlesGridView>
        )}
      </InfiniteScroll>
      <Stack align='center'><LoadNextPage /></Stack>
    </Stack>
  )
}

export default withSuspense(ArticlesClient)
