import { type FetcherInstance } from 'src/06-shared/lib/third-party/fetcher/@types';

import { type GroupedNewsCategoriesResponse } from './@types';

export const groupedNewsCategoriesRequest = (fetcher: FetcherInstance) => async (options?: { signal: AbortSignal }) => {
  const response = await fetcher.request<GroupedNewsCategoriesResponse>({
    method: 'GET',
    url: 'api/news-categories/group',
    params: {
      group_by: 'type',
    },
    signal: options?.signal,
  });
  return response.data;
};
