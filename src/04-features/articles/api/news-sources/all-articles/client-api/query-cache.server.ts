'use server'
import { type CacheClient } from '@/06-shared/lib/third-party/cache/@types'

import { queryOptionsGetter } from './query-cache-options-getter'
import { allArticlesClientApiRequest } from './request'
import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../../../model/@types'

export async function allArticlesQueryCache(
  cache: CacheClient,
  params: ArticlesQueryParams
): Promise<ArticleSerializedResponseQueryMany[]> {
  const optionsGetter = queryOptionsGetter(allArticlesClientApiRequest)
  return await cache.fetchQuery(optionsGetter(params))
}
