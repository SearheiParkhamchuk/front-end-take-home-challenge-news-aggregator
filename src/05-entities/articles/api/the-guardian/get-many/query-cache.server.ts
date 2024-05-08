'use server'
import { type CacheClient } from '@/06-shared/lib/third-party/cache/@types'

import { type QueryParams } from './@types'
import { queryOptionsGetter } from './query-cache-options-getter'
import { theGuardianArticlesServerQuery } from './query.server'
import { type ArticleResponseQueryMany } from '../../types/Article'

export async function theGuardianArticlesQueryCache(cache: CacheClient, params: QueryParams): Promise<ArticleResponseQueryMany> {
  const optionsGetter = queryOptionsGetter(theGuardianArticlesServerQuery)
  return await cache.fetchQuery(optionsGetter(params))
}
