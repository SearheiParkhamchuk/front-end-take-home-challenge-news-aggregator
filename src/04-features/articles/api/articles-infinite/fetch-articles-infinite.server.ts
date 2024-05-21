'use server'
import { allArticlesQueryCacheInfinite } from '@/04-features/articles/api/articles-infinite/query-cache-infinite.server'
import { type ArticlesQueryParams } from '@/04-features/articles/model/@types'
import { getCacheInstance } from '@/06-shared/lib/third-party/cache/get-cache-instance'

export async function fetchArticlesInfinite(params: ArticlesQueryParams) {
  const cache = getCacheInstance()
  const rawArticlesInfinite = await allArticlesQueryCacheInfinite(cache, params)
  return { cache, rawArticlesInfinite }
}
