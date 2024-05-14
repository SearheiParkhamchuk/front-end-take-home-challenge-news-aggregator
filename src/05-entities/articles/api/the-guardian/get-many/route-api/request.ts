'use server'
import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import { getFetcherInstance } from '@/06-shared/lib/third-party/fetcher/get-fetcher-instance'

import { withError } from '@/06-shared/lib/utils/errors/decorators/with-error'

import { UnhandledErrorHandler } from '@/06-shared/lib/utils/errors/handlers/UnhandledErrorHandler'

import { type QuerySuccess } from './@types'
import { TheGuardianErrorHandler } from './error-handler'
import { type ArticleSerialized, type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../../@types'

function paramsAdapter(options: ArticlesQueryParams): URL {
  const url = new URL('https://content.guardianapis.com/search')
  const query = options[SEARCH_PARAMS_KEYS.A_QUERY]
  const page = options[SEARCH_PARAMS_KEYS.A_PAGE]
  const pageSize = options[SEARCH_PARAMS_KEYS.A_PAGE_SIZE]

  if (query) url.searchParams.set('q', query)
  if (page) url.searchParams.set('page', page.toString())
  if (pageSize) url.searchParams.set('page-size', pageSize.toString())

  url.searchParams.set('api-key', process.env.API_KEY_THE_GUARDIAN)
  url.searchParams.set('show-fields', 'trail-text,thumbnail')

  return url
}

function responseAdapter(data: QuerySuccess): { data: ArticleSerialized[] } {
  return {
    data: data.response.results.map(article => ({
      description: article.fields.trailText,
      publishedAt: article.webPublicationDate,
      source: { name: 'The Guardian', src: article.webUrl },
      thumbnail: article.fields.thumbnail,
      title: article.webTitle
    }))
  }
}

export async function request(params: ArticlesQueryParams): Promise<ArticleSerializedResponseQueryMany> {
  const response = await getFetcherInstance().request<QuerySuccess>({
    method: 'GET',
    url: paramsAdapter(params).toString()
  })

  return { error: null, data: responseAdapter(response.data) }
}

export const theGuardianArticlesApiRequest = withError(
  request,
  new TheGuardianErrorHandler(new UnhandledErrorHandler(null))
)
