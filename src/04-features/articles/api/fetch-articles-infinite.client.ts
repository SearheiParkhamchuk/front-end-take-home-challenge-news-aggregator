'use client'
import { type DefaultError, type InfiniteData, useInfiniteQuery } from '@tanstack/react-query'

import { queryKeyInfinite } from '@/04-features/articles/api/news-sources/all-articles/client-api/query-cache-options-getter-infinite'
import { allArticlesClientApiRequest } from '@/04-features/articles/api/news-sources/all-articles/client-api/request'
import { mergeArticles } from '@/04-features/articles/lib/merge-articles'
import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '@/04-features/articles/model/@types'
import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/model/search-params-keys'

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
