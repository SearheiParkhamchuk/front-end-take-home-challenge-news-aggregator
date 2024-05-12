'use client'
import { useQuery } from '@tanstack/react-query'

import { queryOptionsGetter } from './query-cache-options-getter'
import { newsApiArticlesClientApiRequest } from './request'
import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../../@types'

export const queryOptionsNewApi = queryOptionsGetter(newsApiArticlesClientApiRequest)

export function useNewsApiArticlesQuery(params: ArticlesQueryParams) {
  return useQuery<ArticleSerializedResponseQueryMany>(queryOptionsNewApi(params))
}
