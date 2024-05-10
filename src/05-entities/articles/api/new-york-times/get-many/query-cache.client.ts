'use client'
import { useQuery } from '@tanstack/react-query'

import { type QueryParams } from './@types'
import { queryOptionsGetter } from './query-cache-options-getter'
import { NYTArticlesServerQuery } from './query.server'
import { type ArticleResponseQueryMany } from '../../types/Article'

const queryOptions = queryOptionsGetter(NYTArticlesServerQuery)

export function useNYTArticlesQuery(params: QueryParams) {
  return useQuery<ArticleResponseQueryMany>(queryOptions(params))
}
