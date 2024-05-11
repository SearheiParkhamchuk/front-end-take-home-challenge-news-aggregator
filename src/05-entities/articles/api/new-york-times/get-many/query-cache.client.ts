'use client'
import { useQuery } from '@tanstack/react-query'

import { type QueryParams } from './@types'
import { queryOptionsGetter } from './query-cache-options-getter'
import { NYTArticlesServerQuery } from './query.server'
import { type ArticleResponseQueryMany } from '../../types/Article'

export const queryOptionsNyt = queryOptionsGetter(NYTArticlesServerQuery)

export function useNYTArticlesQuery(params: QueryParams) {
  return useQuery<ArticleResponseQueryMany>(queryOptionsNyt(params))
}
