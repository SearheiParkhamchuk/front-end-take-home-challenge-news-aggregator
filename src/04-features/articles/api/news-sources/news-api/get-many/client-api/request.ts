import { getFetcherInstance } from '@/06-shared/lib/third-party/fetcher/get-fetcher-instance'

import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../../../../model/@types'

export const newsApiArticlesClientApiRequest = async (
  params: ArticlesQueryParams,
  options?: { signal: AbortSignal }
) => {
  const response = await getFetcherInstance().request<ArticleSerializedResponseQueryMany>({
    method: 'GET',
    url: '/api/articles/news-api',
    params,
    signal: options?.signal
  })
  return response.data
}
