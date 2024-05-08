'use client'
import { useQuery } from '@tanstack/react-query'

import { type QueryParams } from './@types'
import { queryOptionsGetter } from './query-cache-options-getter'
import { newsApiArticlesServerQuery } from './query.server'

const queryOptions = queryOptionsGetter(newsApiArticlesServerQuery)

export function useNewsApiArticlesQuery(params: QueryParams) {
  return useQuery(queryOptions(params))
}
