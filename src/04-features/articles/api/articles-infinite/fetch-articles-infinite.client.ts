'use client'
import { type DefaultError, type InfiniteData, useInfiniteQuery } from '@tanstack/react-query'

import { useMemo } from 'react'

import { queryKeyInfinite } from '@/04-features/articles/api/articles-infinite/query-cache-options-getter-infinite'
import { articlesRequest } from '@/04-features/articles/api/request'
import { type ArticlesQueryParams, type ArticlesResponse } from '@/04-features/articles/model/@types'
import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/model/search-params-keys'

import { ARTICLES_DEFAULT_PAGE } from '../../model/default-page'

export function useFetchArticlesInfinite(params: ArticlesQueryParams) {
  const { fetchNextPage, data: _data, isLoading, hasNextPage, isFetching } = useInfiniteQuery<
  ArticlesResponse,
  DefaultError,
  InfiniteData<ArticlesResponse, string>,
  unknown[],
  string
  >({
    queryKey: queryKeyInfinite(params),
    queryFn: async ({ signal, pageParam }) => {
      return articlesRequest({ ...params, [SEARCH_PARAMS_KEYS.A_PAGE]: pageParam }, { signal })
    },
    initialPageParam: ARTICLES_DEFAULT_PAGE,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      if (!lastPage.data?.length) return undefined
      return (Number(lastPageParam) + 1).toString()
    }
  })

  const data = useMemo(() => _data ?? { pages: [], pageParams: [] }, [_data])
  const lastPage = data.pageParams.at(-1)
  const nextPage = Number(lastPage) + 1

  return { fetchNextPage, data, isLoading, isFetching, hasNextPage, lastPage, nextPage }
}
