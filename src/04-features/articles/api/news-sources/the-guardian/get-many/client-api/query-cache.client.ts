'use client'
import { useQuery } from '@tanstack/react-query'

import { queryOptionsGetter } from './query-cache-options-getter'
import { theGuardianArticlesClientApiRequest } from './request'
import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../../../../model/@types'

export const queryOptionsTheGuardian = queryOptionsGetter(theGuardianArticlesClientApiRequest)

export function useTheGuardianArticlesQuery(params: ArticlesQueryParams) {
  return useQuery<ArticleSerializedResponseQueryMany>(queryOptionsTheGuardian(params))
}
