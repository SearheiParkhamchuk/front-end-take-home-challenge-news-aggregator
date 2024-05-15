'use server'
import { type CacheClient } from '@/06-shared/lib/third-party/cache/@types'

import { queryOptionsGetter } from './query-cache-options-getter'
import { fakeNewsArticlesClientApiRequest } from './request'
import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../../../../model/@types'

export async function fakeNewsArticlesQueryCache(
  cache: CacheClient,
  params: ArticlesQueryParams
): Promise<ArticleSerializedResponseQueryMany> {
  const optionsGetter = queryOptionsGetter(fakeNewsArticlesClientApiRequest)
  return await cache.fetchQuery(optionsGetter(params))
}
