'use server'
import { type CacheClient } from '@/06-shared/lib/third-party/cache/@types'

import { queryOptionsGetter } from './query-cache-options-getter'
import { NYTArticlesClientApiRequest } from './request'
import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../../../../model/@types'

export async function NYTArticlesQueryCache(cache: CacheClient, params: ArticlesQueryParams): Promise<ArticleSerializedResponseQueryMany> {
  const optionsGetter = queryOptionsGetter(NYTArticlesClientApiRequest)
  return await cache.fetchQuery(optionsGetter(params))
}
