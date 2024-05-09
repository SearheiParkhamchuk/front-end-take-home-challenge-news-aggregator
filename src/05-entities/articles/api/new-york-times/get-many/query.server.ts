'use server'

import { FetcherError } from '@/06-shared/lib/third-party/fetcher/@types'

import { getFetcherInstance } from '@/06-shared/lib/third-party/fetcher/get-fetcher-instance'

import { type QueryError, type QueryParams, type QuerySuccess } from './@types'
import { type Article, type ArticleResponseQueryMany } from '../../types/Article'

function paramsAdapter(options: QueryParams): URL {
  const url = new URL('https://api.nytimes.com/svc/search/v2/articlesearch.json')

  if (options.query) url.searchParams.set('q', options.query)
  if (options.page) url.searchParams.set('page', options.page.toString())

  url.searchParams.set('fl', 'lead_paragraph,pub_date,source,web_url,multimedia,abstract')
  url.searchParams.set('api-key', process.env.API_KEY_NEW_YORK_TIMES_ARTICLES)

  return url
}

function responseAdapter(data: QuerySuccess): { data: Article[] } {
  return {
    data: data.response.docs.map(article => {
      const imagePath = article.multimedia[0]?.url
      return {
        description: article.lead_paragraph,
        publishedAt: new Date(article.pub_date),
        source: { name: article.source, src: article.web_url },
        thumbnail: imagePath ? new URL(imagePath, 'https://www.nytimes.com').toString() : null,
        title: article.abstract
      }
    })
  }
}

export async function NYTArticlesServerQuery(
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
