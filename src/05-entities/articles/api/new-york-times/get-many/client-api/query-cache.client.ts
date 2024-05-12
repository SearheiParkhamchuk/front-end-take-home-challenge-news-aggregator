'use client'
import { useQuery } from '@tanstack/react-query'

import { queryOptionsGetter } from './query-cache-options-getter'
import { NYTArticlesClientApiRequest } from './request'
import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../../@types'

export const queryOptionsNyt = queryOptionsGetter(NYTArticlesClientApiRequest)

export function useNYTArticlesQuery(params: ArticlesQueryParams) {
  return useQuery<ArticleSerializedResponseQueryMany>(queryOptionsNyt(params))
}
