'use server'
import { getFetcherInstance } from '@/06-shared/lib/third-party/fetcher/get-fetcher-instance'

import { withError } from '@/06-shared/lib/utils/errors/decorators/with-error'

import { UnhandledErrorHandler } from '@/06-shared/lib/utils/errors/handlers/UnhandledErrorHandler'

import { type QueryParams, type QuerySuccess } from './@types'
import { TheGuardianErrorHandler } from './error-handler'
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

export async function serverQuery(params: QueryParams): Promise<ArticleResponseQueryMany> {
  const response = await getFetcherInstance().request<QuerySuccess>({
    method: 'GET',
    url: paramsAdapter(params).toString()
  })

  return { error: null, data: responseAdapter(response.data) }
}

export const theGuardianArticlesServerQuery = withError(serverQuery, new TheGuardianErrorHandler(new UnhandledErrorHandler(null)))
