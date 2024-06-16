'use client';
import { type DefaultError, type InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { getFetcherInstanceClient } from 'src/06-shared/lib/third-party/fetcher/get-fetcher-instance-client';

import { prepareArticles } from './../../model/prepare-articles';
import { type ArticlesRequestParams, type ArticlesResponse } from './@types';
import { queryKey } from './get-articles-infinite.options';
import { articlesRequest } from './request';
import { ARTICLES_DEFAULT_PAGE } from '../../constants/default-page';
import { type ArticleClient } from '../../model/@types';

const articlesRequestClient = articlesRequest(getFetcherInstanceClient());

export function useGetArticlesInfinite(params: ArticlesRequestParams) {
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
  } = useInfiniteQuery<ArticlesResponse, DefaultError, InfiniteData<ArticleClient[], string>, unknown[], string>({
    queryKey: queryKey(params),
    queryFn: async ({ signal, pageParam }) => {
      return articlesRequestClient({ ...params, page: pageParam }, { signal });
    },
    initialPageParam: ARTICLES_DEFAULT_PAGE,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      if (!lastPage.data?.length) return undefined;
      return (Number(lastPageParam) + 1).toString();
    },
    placeholderData: (prev) => prev,
    select: (inifinite) => {
      const pages = inifinite.pages.map((d) => prepareArticles(d.data));
      return { pages, pageParams: inifinite.pageParams };
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
