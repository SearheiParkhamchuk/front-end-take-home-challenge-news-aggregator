import { type UseQueryOptions } from '@tanstack/react-query'

import { type QueryParams } from './@types'
import { type ArticleResponseQueryMany } from '../../types/Article'

export const queryKey = (options: QueryParams) => ['articles', options, 'the_guardian']

export function queryOptionsGetter(fetcher: (params: QueryParams) => Promise<ArticleResponseQueryMany>) {
  return function(params: QueryParams): UseQueryOptions<ArticleResponseQueryMany> {
    return {
      queryKey: queryKey(params),
      queryFn: async () => await fetcher(params)
    }
  }
}
