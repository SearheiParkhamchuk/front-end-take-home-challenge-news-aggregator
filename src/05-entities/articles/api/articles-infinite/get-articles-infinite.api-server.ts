'use server';

import { getCacheInstance } from 'src/06-shared/lib/third-party/cache/get-cache-instance';

import { getFetcherInstanceServer } from 'src/06-shared/lib/third-party/fetcher/get-fetcher-instance-server';

import { type ArticlesRequestParams } from './@types';
import { queryOptionsGetter } from './get-articles-infinite.options';
import { articlesRequest } from './request';

export async function getArticlesInfinite(params: ArticlesRequestParams) {
  const articlesRequestServer = articlesRequest(getFetcherInstanceServer());
  const cache = getCacheInstance();
  const queryOptions = queryOptionsGetter(articlesRequestServer);
  const response = await cache.fetchInfiniteQuery({ ...queryOptions(params) });
  return { cache, response };
}
