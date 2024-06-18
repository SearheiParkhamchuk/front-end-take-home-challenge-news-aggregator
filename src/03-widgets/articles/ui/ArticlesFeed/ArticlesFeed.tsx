'use client'
import { useCallback } from 'react'

import { getArticlesQueryParams } from 'src/04-features/articles'
import { Articles } from 'src/04-features/articles/index.ui'
import { useArticlesView } from 'src/04-features/articles-change-view/index.client'
import { ARTICLES_SEARCH_PARAMS_KEYS } from 'src/05-entities/articles'
import { articlesClientApi } from 'src/05-entities/articles/index.client'

import { InfiniteFeed } from 'src/05-entities/feed/index.ui'

import { useSearchParams } from 'src/06-shared/lib/third-party/router/useSearchParams'
import { withSuspense } from 'src/06-shared/lib/utils/HOK/withSuspense'
import Alert from 'src/06-shared/ui/Alert'

import ButtonLoadNextPage from 'src/06-shared/ui/ButtonLoadNextPage'
import ButtonLoadPreviousPage from 'src/06-shared/ui/ButtonLoadPreviousPage'
import { pageNumberIndicator } from 'src/06-shared/ui/InfiniteScroll'
import PageError from 'src/06-shared/ui/LayoutNotFoundError'

const AUTOLOAD_PAGES = 3

function ArticlesFeed() {
  const [searchParams, { set, getFullPath }] = useSearchParams()
  const [view] = useArticlesView()
  const articlesParams = getArticlesQueryParams(searchParams)

  const infinite = articlesClientApi.useGetArticlesInfinite(articlesParams)
  const { fetchNextPage } = infinite
  const noArticlesFound = infinite.data.pages.flat().length === 0

  const onPage = useCallback((page: string) => {
    set({ [ARTICLES_SEARCH_PARAMS_KEYS.A_PAGE]: page })
  }, [set])

  const onLastPage = useCallback(() => {
    if (Number(articlesParams.page) <= AUTOLOAD_PAGES) fetchNextPage()
  }, [articlesParams.page, fetchNextPage])

  if (noArticlesFound) return <PageError title='No articles found' />

  return (
    <>
      {infinite.error && <Alert variant='error'>{infinite.error.message}</Alert>}
      <InfiniteFeed
        LoadNext={
          <ButtonLoadNextPage
            hasNext={infinite.hasNextPage}
            href={getFullPath({ [ARTICLES_SEARCH_PARAMS_KEYS.A_PAGE]: infinite.nextPage.toString() })}
            loading={infinite.isFetchingNextPage}
            onLoad={infinite.fetchNextPage}
          />
        }
        LoadPrevious={
          <ButtonLoadPreviousPage
            hasPrevious={infinite.hasPreviousPage}
            href={getFullPath({ [ARTICLES_SEARCH_PARAMS_KEYS.A_PAGE]: infinite.previousPage.toString() })}
            loading={infinite.isFetchingPreviousPage}
            onLoad={infinite.fetchPreviousPage}
          />
        }
        onLastPage={onLastPage}
        onPage={onPage}
      >
        <Articles
          params={articlesParams}
          renderItem={(article, options) => (
            <div
              key={article.key}
              {...(options.articleIndex === 0 && pageNumberIndicator(options.page))}
            >
              {article}
            </div>
          )}
          view={view}
        />
      </InfiniteFeed>
    </>
  )
}

export default withSuspense(ArticlesFeed)
