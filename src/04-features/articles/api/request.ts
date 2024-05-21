import { type ArticlesQueryParams, type ArticlesResponse } from '@/04-features/articles/model/@types'
import { getFetcherInstance } from '@/06-shared/lib/third-party/fetcher/get-fetcher-instance'

export const articlesRequest = async (params: ArticlesQueryParams, options?: { signal: AbortSignal }) => {
  const response = await getFetcherInstance().request<ArticlesResponse>({
    method: 'GET',
    url: '/api/articles',
    params,
    signal: options?.signal
  })
  return response.data
}
