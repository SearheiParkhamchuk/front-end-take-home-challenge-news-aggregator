'use client'
import { useQuery } from '@tanstack/react-query'

import { queryOptionsGetter } from './query-cache-options-getter'
import { fakeNewsArticlesClientApiRequest } from './request'
import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../../../../model/@types'

export const queryOptionsTheGuardian = queryOptionsGetter(fakeNewsArticlesClientApiRequest)

export function useFakeArticlesQuery(params: ArticlesQueryParams) {
  return useQuery<ArticleSerializedResponseQueryMany>(queryOptionsTheGuardian(params))
}
