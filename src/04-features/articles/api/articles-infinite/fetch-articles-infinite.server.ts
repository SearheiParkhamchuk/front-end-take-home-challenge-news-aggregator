'use server';
import { allArticlesQueryCacheInfinite } from 'src/04-features/articles/api/articles-infinite/query-cache-infinite.server';
import { type ArticlesClientQueryParams } from 'src/04-features/articles/model/@types';
import { getCacheInstance } from 'src/06-shared/lib/third-party/cache/get-cache-instance';

export async function fetchArticlesInfinite(params: ArticlesClientQueryParams) {
  const cache = getCacheInstance();
  const rawArticlesInfinite = await allArticlesQueryCacheInfinite(cache, params);
  return { cache, rawArticlesInfinite };
}
