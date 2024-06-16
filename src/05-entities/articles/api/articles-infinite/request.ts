import { type FetcherInstance } from 'src/06-shared/lib/third-party/fetcher/@types';

import { type ArticlesRequestParams, type ArticlesResponse } from './@types';

export const articlesRequest = (fetcher: FetcherInstance) => async (params: ArticlesRequestParams, options?: { signal: AbortSignal }) => {
  const response = await fetcher.request<ArticlesResponse>({
    method: 'GET',
    url: '/api/articles',
    params: {
      page: params.page,
      size: params.size,
      query: params.query,
      order_by: params.order_by,
      'filter_by.categories': params.filterByCategories,
    },
    signal: options?.signal,
  });
  return response.data;
};
