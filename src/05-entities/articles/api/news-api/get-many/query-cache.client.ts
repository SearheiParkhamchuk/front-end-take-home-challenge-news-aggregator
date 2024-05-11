'use client'
import { useQuery } from '@tanstack/react-query'

import { type QueryParams } from './@types'
import { queryOptionsGetter } from './query-cache-options-getter'
import { newsApiArticlesServerQuery } from './query.server'
import { type ArticleResponseQueryMany } from '../../types/Article'

export const queryOptionsNewApi = queryOptionsGetter(newsApiArticlesServerQuery)

export function useNewsApiArticlesQuery(params: QueryParams) {
  return useQuery<ArticleResponseQueryMany>(queryOptionsNewApi(params))
}
