'use server'
import { FetcherError } from '@/06-shared/lib/third-party/fetcher/@types'
import { getFetcherInstance } from '@/06-shared/lib/third-party/fetcher/get-fetcher-instance'

import { type QueryError, type QueryParams, type QuerySuccess } from './@types'
import { type Article, type ArticleResponseQueryMany } from '../../types/Article'

function paramsAdapter(options: QueryParams): URL {
  const url = new URL('https://newsapi.org/v2/everything')

  if (options.query) url.searchParams.set('q', options.query)
  if (options.page) url.searchParams.set('page', options.page.toString())
  if (options.pageSize) url.searchParams.set('pageSize', options.pageSize.toString())
  url.searchParams.set('apiKey', process.env.API_KEY_NEWS_API)

  return url
}

function responseAdapter(data: QuerySuccess): { data: Article[] } {
  return {
    data: data.articles.map(article => ({
      description: article.description,
      publishedAt: new Date(article.publishedAt),
      source: { name: article.source.name, src: article.url },
      thumbnail: article.urlToImage,
      title: article.title
    }))
  }
}

export async function newsApiArticlesServerQuery(
  params: QueryParams,
  options?: { signal?: AbortSignal }
): Promise<ArticleResponseQueryMany> {
  const fetcher = getFetcherInstance()

  try {
    const response = await fetcher.request<QuerySuccess>({
      method: 'GET',
      url: paramsAdapter(params).toString(),
      signal: options?.signal
    })

    const data = responseAdapter(response.data)
    return { error: null, data }
  } catch (e: unknown) {
    if (e instanceof FetcherError) {
      const error: FetcherError<QueryError> = e
      return { error: new Error(error.response?.data.message), data: null }
    }
    return { error: new Error('Unexpected error'), data: null }
  }
}
