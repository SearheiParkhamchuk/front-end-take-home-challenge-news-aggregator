'use client'
import { useQuery } from '@tanstack/react-query'

import { type QueryParams } from './@types'
import { queryOptionsGetter } from './query-cache-options-getter'
import { theGuardianArticlesServerQuery } from './query.server'
import { type ArticleResponseQueryMany } from '../../types/Article'

export const queryOptionsTheGuardian = queryOptionsGetter(theGuardianArticlesServerQuery)

export function useTheGuardianArticlesQuery(params: QueryParams) {
  return useQuery<ArticleResponseQueryMany>(queryOptionsTheGuardian(params))
}
