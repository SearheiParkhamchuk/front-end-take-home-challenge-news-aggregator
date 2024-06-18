import { type FetchInfiniteQueryOptions } from '@tanstack/react-query';
import pickBy from 'lodash/pickBy';

import { type ArticlesRequestParams, type ArticlesResponse } from './@types';

const AVAILABLE_KEYS: Array<keyof ArticlesRequestParams> = ['order_by', 'query', 'size', 'filterByCategories'];

export const queryKey = (options?: Partial<Omit<ArticlesRequestParams, 'page'>>) => [
  'articles_infinite',
  pickBy(options, (_, key) => AVAILABLE_KEYS.includes(key as keyof ArticlesRequestParams)),
];

type Return = FetchInfiniteQueryOptions<ArticlesResponse, Error, ArticlesResponse, Array<string | object>, string>;

export function queryOptionsGetter(
  fetcher: (params: ArticlesRequestParams, options?: { signal: AbortSignal }) => Promise<ArticlesResponse>,
) {
  return function (params: ArticlesRequestParams): Return {
    return {
      queryKey: queryKey(params),
      queryFn: async ({ signal }) => {
        return await fetcher(params, { signal });
      },
      initialPageParam: params.page,
    };
  };
}
