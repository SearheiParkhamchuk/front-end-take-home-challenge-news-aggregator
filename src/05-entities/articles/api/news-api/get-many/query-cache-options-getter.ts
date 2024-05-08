import { type FetchQueryOptions } from '@tanstack/react-query'

import { type QueryParams } from './@types'
import { type ArticleResponseQueryMany } from '../../types/Article'

export const queryKey = (options: QueryParams) => ['articles', options, 'news_api']

export function queryOptionsGetter(fetcher: (params: QueryParams, options: { signal?: AbortSignal }) => Promise<ArticleResponseQueryMany>) {
  return function(params: QueryParams): FetchQueryOptions<ArticleResponseQueryMany> {
    return {
      queryKey: queryKey(params),
      queryFn: async ({ signal }) => await fetcher(params, { signal })
    }
  }
}
