import { getFetcherInstance } from '@/06-shared/lib/third-party/fetcher/get-fetcher-instance'

import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../../@types'

export const theGuardianArticlesClientApiRequest = async (
  params: ArticlesQueryParams,
  options?: { signal: AbortSignal }
) => {
  const response = await getFetcherInstance().request<ArticleSerializedResponseQueryMany>({
    method: 'GET',
    url: '/api/articles/the-guardian',
    params,
    signal: options?.signal
  })
  return response.data
}
