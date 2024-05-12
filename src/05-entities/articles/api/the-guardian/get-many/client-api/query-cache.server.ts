'use server'
import { type CacheClient } from '@/06-shared/lib/third-party/cache/@types'

import { queryOptionsGetter } from './query-cache-options-getter'
import { theGuardianArticlesClientApiRequest } from './request'
import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../../@types'

export async function theGuardianArticlesQueryCache(
  cache: CacheClient,
  params: ArticlesQueryParams
): Promise<ArticleSerializedResponseQueryMany> {
  const optionsGetter = queryOptionsGetter(theGuardianArticlesClientApiRequest)
  return await cache.fetchQuery(optionsGetter(params))
}
