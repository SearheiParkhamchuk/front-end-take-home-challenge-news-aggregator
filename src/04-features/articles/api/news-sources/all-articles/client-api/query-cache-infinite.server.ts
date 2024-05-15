'use server'
import { type InfiniteData } from '@tanstack/react-query'

import { type CacheClient } from '@/06-shared/lib/third-party/cache/@types'

import { queryOptionsGetterInfinite } from './query-cache-options-getter-infinite'
import { allArticlesClientApiRequest } from './request'
import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../../../model/@types'

export async function allArticlesQueryCacheInfinite(
  cache: CacheClient,
  params: ArticlesQueryParams
): Promise<InfiniteData<ArticleSerializedResponseQueryMany[], string>> {
  const optionsGetter = queryOptionsGetterInfinite(allArticlesClientApiRequest)
  return await cache.fetchInfiniteQuery(optionsGetter(params))
}
