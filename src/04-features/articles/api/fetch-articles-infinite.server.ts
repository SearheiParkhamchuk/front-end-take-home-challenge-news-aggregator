'use server'
import { type ArticlesQueryParams } from '@/05-entities/articles/api/@types'

import { allArticlesQueryCacheInfinite } from '@/05-entities/articles/api/all-articles/client-api/query-cache-infinite.server'
import { mergeArticlesErrors } from '@/05-entities/articles/lib/merge-articles-errors'
import { getCacheInstance } from '@/06-shared/lib/third-party/cache/get-cache-instance'

export async function fetchArticlesInfinite(params: ArticlesQueryParams) {
  const cache = getCacheInstance()
  const rawArticlesInfinite = await allArticlesQueryCacheInfinite(cache, params)
  const errors = mergeArticlesErrors(rawArticlesInfinite.pages.flat())
  return { errors, cache, rawArticlesInfinite }
}
