'use server'
import { type CacheClient } from '@/06-shared/lib/third-party/cache/@types'

import { type QueryParams } from './@types'
import { queryOptionsGetter } from './query-cache-options-getter'
import { newsApiArticlesServerQuery } from './query.server'
import { type ArticleResponseQueryMany } from '../../types/Article'

export async function newsApiArticlesQueryCache(cache: CacheClient, params: QueryParams): Promise<ArticleResponseQueryMany> {
  const optionsGetter = queryOptionsGetter(newsApiArticlesServerQuery)
  return await cache.fetchQuery(optionsGetter(params))
}
