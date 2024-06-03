'use client';
import { type DefaultError, type InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

import { useMemo } from 'react';

import { queryKeyInfinite } from '@/04-features/articles/api/articles-infinite/query-cache-options-getter-infinite';
import { articlesRequest } from '@/04-features/articles/api/request';
import { type ArticlesQueryParams, type ArticlesResponse } from '@/04-features/articles/model/@types';
import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/model/search-params-keys';

import { getFetcherInstanceClient } from '@/06-shared/lib/third-party/fetcher/get-fetcher-instance-client';

import { ARTICLES_DEFAULT_PAGE } from '../../model/default-page';

const articlesRequestClient = articlesRequest(getFetcherInstanceClient());

export function useFetchArticlesInfinite(params: ArticlesQueryParams) {
  const {
    fetchNextPage,
    fetchPreviousPage,
    data: _data,
    isLoading,
    isFetchingNextPage,
    isFetchingPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetching,
    error,
  } = useInfiniteQuery<ArticlesResponse, DefaultError, InfiniteData<ArticlesResponse, string>, unknown[], string>({
    queryKey: queryKeyInfinite(params),
    queryFn: async ({ signal, pageParam }) => {
      return articlesRequestClient({ ...params, [SEARCH_PARAMS_KEYS.A_PAGE]: pageParam }, { signal });
    },
    initialPageParam: ARTICLES_DEFAULT_PAGE,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      if (!lastPage.data?.length) return undefined;
      return (Number(lastPageParam) + 1).toString();
    },
    getPreviousPageParam: (firstPage, __, firstPageParam) => {
      if (!firstPage.data?.length) return undefined;

      const previousPage = Number(firstPageParam) - 1;
      if (previousPage < 0) return undefined;
      return previousPage.toString();
    },
  });

  const data = useMemo(() => _data ?? { pages: [], pageParams: [] }, [_data]);
  const lastPage = data.pageParams.at(-1);
  const firstPage = data.pageParams[0];
  const nextPage = Number(lastPage) + 1;
  const previousPage = Number(firstPage) - 1;

  return {
    fetchNextPage,
    fetchPreviousPage,
    data,
    isLoading,
    isFetching,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    lastPage,
    nextPage,
    previousPage,
    error,
  };
}
