'use server';
import { type InfiniteData } from '@tanstack/react-query';

import { type ArticlesQueryParams, type ArticlesResponse } from '@/04-features/articles/model/@types';
import { type CacheClient } from '@/06-shared/lib/third-party/cache/@types';

import { getFetcherInstanceServer } from '@/06-shared/lib/third-party/fetcher/get-fetcher-instance-server';

import { queryOptionsGetterInfinite } from './query-cache-options-getter-infinite';
import { articlesRequest } from '../request';

const articlesRequestClient = articlesRequest(getFetcherInstanceServer());

export async function allArticlesQueryCacheInfinite(
  cache: CacheClient,
  params: ArticlesQueryParams,
): Promise<InfiniteData<ArticlesResponse, string>> {
  const optionsGetter = queryOptionsGetterInfinite(articlesRequestClient);
  return await cache.fetchInfiniteQuery(optionsGetter(params));
}
