import { type ArticlesClientQueryParams, type ArticlesResponse } from 'src/04-features/articles/model/@types';
import { type FetcherInstance } from 'src/06-shared/lib/third-party/fetcher/@types';

export const articlesRequest =
  (fetcher: FetcherInstance) => async (params: ArticlesClientQueryParams, options?: { signal: AbortSignal }) => {
    const response = await fetcher.request<ArticlesResponse>({
      method: 'GET',
      url: '/api/articles',
      params,
      signal: options?.signal,
    });
    return response.data;
  };
