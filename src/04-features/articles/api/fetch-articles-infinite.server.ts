'use server'

import { allArticlesQueryCacheInfinite } from '@/04-features/articles/api/news-sources/all-articles/client-api/query-cache-infinite.server'
import { mergeArticlesErrors } from '@/04-features/articles/lib/merge-articles-errors'
import { type ArticlesQueryParams } from '@/04-features/articles/model/@types'
import { getCacheInstance } from '@/06-shared/lib/third-party/cache/get-cache-instance'

export async function fetchArticlesInfinite(params: ArticlesQueryParams) {
  const cache = getCacheInstance()
  const rawArticlesInfinite = await allArticlesQueryCacheInfinite(cache, params)
  const errors = mergeArticlesErrors(rawArticlesInfinite.pages.flat())
  return { errors, cache, rawArticlesInfinite }
}
