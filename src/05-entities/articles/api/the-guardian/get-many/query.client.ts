'use client'
import { useQuery } from '@tanstack/react-query'

import { type QueryParams } from './@types'
import { queryOptionsGetter } from './query-cache-options-getter'
import { theGuardianArticlesServerQuery } from './query.server'

const queryOptions = queryOptionsGetter(theGuardianArticlesServerQuery)

export function useTheGuardianArticlesQuery(params: QueryParams) {
  return useQuery(queryOptions(params))
}
