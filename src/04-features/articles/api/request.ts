import { type ArticlesQueryParams, type ArticlesResponse } from '@/04-features/articles/model/@types'
import { getFetcherInstance } from '@/06-shared/lib/third-party/fetcher/get-fetcher-instance'

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

export const articlesRequest = async (params: ArticlesQueryParams, options?: { signal: AbortSignal }) => {
  const response = await getFetcherInstance({ baseURL }).request<ArticlesResponse>({
    method: 'GET',
    url: '/api/articles',
    params: {
      size: params.a_page_size,
      page: params.a_page,
      query: params.a_query,
      order_by: params.a_order_by
    },
    signal: options?.signal
  })
  return response.data
}
