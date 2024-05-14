'use client'
import { type DefaultError, type InfiniteData, useInfiniteQuery } from '@tanstack/react-query'

import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '@/05-entities/articles/api/@types'
import { queryKeyInfinite } from '@/05-entities/articles/api/all-articles/client-api/query-cache-options-getter-infinite'
import { allArticlesClientApiRequest } from '@/05-entities/articles/api/all-articles/client-api/request'
import { mergeArticles } from '@/05-entities/articles/lib/merge-articles'

export function useFetchArticlesInfinite(params: ArticlesQueryParams) {
  const { fetchNextPage, data: _data, isLoading, hasNextPage, isFetching } = useInfiniteQuery<
  ArticleSerializedResponseQueryMany[],
  DefaultError,
  InfiniteData<ArticleSerializedResponseQueryMany[], string>,
  unknown[],
  string
  >({
    queryKey: queryKeyInfinite(params),
    queryFn: async ({ signal, pageParam }) => {
      return allArticlesClientApiRequest({ ...params, [SEARCH_PARAMS_KEYS.A_PAGE]: pageParam }, { signal })
    },
    initialPageParam: '1',
    getNextPageParam: (lastPage, __, lastPageParam) => {
      if (mergeArticles(lastPage).length === 0) return undefined
      return (Number(lastPageParam) + 1).toString()
    }
  })

  const data = _data ?? { pages: [], pageParams: [] }
  const lastPage = data.pageParams.at(-1)
  const nextPage = Number(lastPage) + 1

  return { fetchNextPage, data, isLoading, isFetching, hasNextPage, lastPage, nextPage }
}
