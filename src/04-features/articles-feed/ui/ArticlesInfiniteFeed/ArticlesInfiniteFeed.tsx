'use client'
import { useCallback } from 'react'

import { getArticlesQueryParams } from 'src/04-features/articles-feed'
import { ArticleLoadNextPage, ArticleLoadPreviousPage } from 'src/04-features/articles-feed/index.ui'
import { ARTICLES_SEARCH_PARAMS_KEYS } from 'src/05-entities/articles'

import { InfiniteFeed } from 'src/05-entities/feed/index.ui'

import { useSearchParams } from 'src/06-shared/lib/third-party/router/useSearchParams'
import { withSuspense } from 'src/06-shared/lib/utils/HOK/withSuspense'

import { type ArticlesFeedProps } from './types'
import { useGetArticlesInfinite } from '../../api/useGetArticlesInfinite'

const AUTOLOAD_PAGES = 3

function ArticlesInfiniteFeed({ children }: ArticlesFeedProps) {
  const [searchParams, { set }] = useSearchParams()
  const articlesParams = getArticlesQueryParams(searchParams)

  const infinite = useGetArticlesInfinite()
  const { fetchNextPage } = infinite

  const onPage = useCallback((page: string) => {
    set({ [ARTICLES_SEARCH_PARAMS_KEYS.A_PAGE]: page })
  }, [set])

  const onLastPage = useCallback(() => {
    if (Number(articlesParams.page) <= AUTOLOAD_PAGES) fetchNextPage()
  }, [articlesParams.page, fetchNextPage])

  return (
    <InfiniteFeed
      LoadNext={<ArticleLoadNextPage />}
      LoadPrevious={<ArticleLoadPreviousPage />}
      onLastPage={onLastPage}
      onPage={onPage}
    >
      {children}
    </InfiniteFeed>
  )
}

export default withSuspense(ArticlesInfiniteFeed)
