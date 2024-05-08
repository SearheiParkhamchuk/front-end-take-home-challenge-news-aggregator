'use server'

import { FetcherError } from '@/06-shared/lib/third-party/fetcher/@types'

import { getFetcherInstance } from '@/06-shared/lib/third-party/fetcher/get-fetcher-instance'

import { type QueryError, type QueryParams, type QuerySuccess } from './@types'
import { type Article, type ArticleResponseQueryMany } from '../../types/Article'

function paramsAdapter(options: QueryParams): URL {
  const url = new URL('https://content.guardianapis.com/search')

  if (options.query) url.searchParams.set('q', options.query)
  if (options.page) url.searchParams.set('page', options.page.toString())
  if (options.pageSize) url.searchParams.set('page-size', options.pageSize.toString())

  url.searchParams.set('api-key', process.env.API_KEY_THE_GUARDIAN)
  url.searchParams.set('show-fields', 'trail-text,thumbnail')

  return url
}

function responseAdapter(data: QuerySuccess): { data: Article[] } {
  return {
    data: data.response.results.map(article => ({
      description: article.fields.trailText,
      publishedAt: new Date(article.webPublicationDate),
      source: { name: 'The Guardian', src: article.webUrl },
      thumbnail: article.fields.thumbnail,
      title: article.webTitle
    }))
  }
}

export async function theGuardianArticlesServerQuery(
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
      return { error: new Error(error.response?.data.response.message), data: null }
    }
    return { error: new Error('Unexpected error'), data: null }
  }
}
