import { type FetchInfiniteQueryOptions } from '@tanstack/react-query';
import isNil from 'lodash/isNil';
import omitBy from 'lodash/omitBy';

import { type ArticlesClientQueryParams, type ArticlesResponse } from 'src/04-features/articles/model/@types';
import { SEARCH_PARAMS_KEYS } from 'src/05-entities/app/model/search-params-keys';

export const queryKeyInfinite = (options?: Partial<ArticlesClientQueryParams>) => [
  'articles_infinite',
  omitBy(options, (value, key) => isNil(value) || key === SEARCH_PARAMS_KEYS.A_PAGE),
];

type Return = FetchInfiniteQueryOptions<ArticlesResponse, Error, ArticlesResponse, Array<string | object>, string>;

export function queryOptionsGetterInfinite(
  fetcher: (params: ArticlesClientQueryParams, options?: { signal: AbortSignal }) => Promise<ArticlesResponse>,
) {
  return function (params: ArticlesClientQueryParams): Return {
    return {
      queryKey: queryKeyInfinite(params),
      queryFn: async ({ signal }) => {
        return await fetcher(params, { signal });
      },
      initialPageParam: params.page,
    };
  };
}
