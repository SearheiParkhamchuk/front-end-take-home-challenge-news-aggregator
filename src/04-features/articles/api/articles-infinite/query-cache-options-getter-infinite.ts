import { type FetchInfiniteQueryOptions } from '@tanstack/react-query';
import pickBy from 'lodash/pickBy';

import { type ArticlesClientQueryParams, type ArticlesResponse } from 'src/04-features/articles/model/@types';

const AVAILABLE_KEYS: Array<keyof ArticlesClientQueryParams> = ['order_by', 'query', 'size'];

export const queryKeyInfinite = (options?: Partial<Omit<ArticlesClientQueryParams, 'page'>>) => [
  'articles_infinite',
  pickBy(options, (_, key) => AVAILABLE_KEYS.includes(key as keyof ArticlesClientQueryParams)),
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
