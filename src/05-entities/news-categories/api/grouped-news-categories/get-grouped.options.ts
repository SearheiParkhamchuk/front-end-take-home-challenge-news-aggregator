import { type FetchQueryOptions } from '@tanstack/react-query';

import { type GroupedNewsCategoriesResponse } from './@types';

export const queryKey = () => ['grouped_news_categories'];

type Return = FetchQueryOptions<GroupedNewsCategoriesResponse, Error, GroupedNewsCategoriesResponse>;

export function queryOptionsGetter(fetcher: (options?: { signal: AbortSignal }) => Promise<GroupedNewsCategoriesResponse>) {
  return function (): Return {
    return {
      queryKey: queryKey(),
      queryFn: async ({ signal }) => {
        return await fetcher({ signal });
      },
    };
  };
}
