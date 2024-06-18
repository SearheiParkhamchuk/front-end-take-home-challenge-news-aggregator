'use client'
import { useCallback } from 'react'

import { getArticlesQueryParams } from 'src/04-features/articles'
import { Articles, LoadNextPage, LoadPreviousPage } from 'src/04-features/articles/index.ui'
import { useArticlesView } from 'src/04-features/articles-change-view/index.client'
import { ARTICLES_SEARCH_PARAMS_KEYS } from 'src/05-entities/articles'
import { articlesClientApi } from 'src/05-entities/articles/index.client'

import { InfiniteFeed } from 'src/05-entities/feed/index.ui'

import { useSearchParams } from 'src/06-shared/lib/third-party/router/useSearchParams'
import { withSuspense } from 'src/06-shared/lib/utils/HOK/withSuspense'
import Alert from 'src/06-shared/ui/Alert'

import { pageNumberIndicator } from 'src/06-shared/ui/InfiniteScroll'
import PageError from 'src/06-shared/ui/LayoutNotFoundError'

const AUTOLOAD_PAGES = 3

function ArticlesFeed() {
  const [searchParams, { set, getFullPath }] = useSearchParams()
  const [view] = useArticlesView()
  const articlesParams = getArticlesQueryParams(searchParams)

  const inifinite = articlesClientApi.useGetArticlesInfinite(articlesParams)
  const { fetchNextPage } = inifinite
  const noArticlesFound = inifinite.data.pages.flat().length === 0

  const onPage = useCallback((page: string) => {
    set({ [ARTICLES_SEARCH_PARAMS_KEYS.A_PAGE]: page })
  }, [set])

  const onLastPage = useCallback(() => {
    if (Number(articlesParams.page) <= AUTOLOAD_PAGES) fetchNextPage()
  }, [articlesParams.page, fetchNextPage])

  if (noArticlesFound) return <PageError title='No articles found' />

  return (
    <>
      {inifinite.error && <Alert variant='error'>{inifinite.error.message}</Alert>}
      <InfiniteFeed
        LoadNext={
          <LoadNextPage
            href={getFullPath({ [ARTICLES_SEARCH_PARAMS_KEYS.A_PAGE]: inifinite.nextPage.toString() })}
            params={articlesParams}
          />
        }
        LoadPrevious={
          inifinite.hasPreviousPage ? <LoadPreviousPage
            href={getFullPath({ [ARTICLES_SEARCH_PARAMS_KEYS.A_PAGE]: inifinite.previousPage.toString() })}
            params={articlesParams}
          /> : null
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
