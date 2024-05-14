'use client'
import { useQuery } from '@tanstack/react-query'

import { queryOptionsGetter } from './query-cache-options-getter'
import { allArticlesClientApiRequest } from './request'
import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../@types'

export const queryOptionsAllArticles = queryOptionsGetter(allArticlesClientApiRequest)

export function useAllArticles(params: ArticlesQueryParams) {
  return useQuery<ArticleSerializedResponseQueryMany[]>(queryOptionsAllArticles(params))
}
