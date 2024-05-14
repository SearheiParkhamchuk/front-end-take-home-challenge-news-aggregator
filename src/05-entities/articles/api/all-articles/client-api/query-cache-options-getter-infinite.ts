import { type FetchInfiniteQueryOptions } from '@tanstack/react-query'
import isNil from 'lodash/isNil'
import omitBy from 'lodash/omitBy'

import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'

import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../@types'

export const queryKeyInfinite = (options?: Partial<ArticlesQueryParams>) => [
  'articles_infinite',
  omitBy(options, (value, key) => isNil(value) || key === SEARCH_PARAMS_KEYS.A_PAGE)
]

type Return = FetchInfiniteQueryOptions<
ArticleSerializedResponseQueryMany[],
Error,
ArticleSerializedResponseQueryMany[],
Array<string | object>,
string
>

export function queryOptionsGetterInfinite(
  fetcher: (params: ArticlesQueryParams, options?: { signal: AbortSignal }) => Promise<ArticleSerializedResponseQueryMany[]>
) {
  return function(params: ArticlesQueryParams): Return {
    return {
      queryKey: queryKeyInfinite(params),
      queryFn: async ({ signal }) => {
        return await fetcher(params, { signal })
      },
      initialPageParam: params[SEARCH_PARAMS_KEYS.A_PAGE]
    }
  }
}
