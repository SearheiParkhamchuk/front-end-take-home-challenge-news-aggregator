'use server'
import { ARTICLES_ORDER_BY } from '@/04-features/articles-sorting/model'
import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/model/search-params-keys'
import { getFetcherInstance } from '@/06-shared/lib/third-party/fetcher/get-fetcher-instance'

import { withError } from '@/06-shared/lib/utils/errors/decorators/with-error'

import { UnhandledErrorHandler } from '@/06-shared/lib/utils/errors/handlers/UnhandledErrorHandler'

import { type QuerySuccess } from './@types'
import { TheGuardianErrorHandler } from './error-handler'
import { type ArticleSerialized, type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../../../../model/@types'

const orderByMap: Record<ARTICLES_ORDER_BY, 'relevancy' | 'publishedAt' | undefined> = {
  [ARTICLES_ORDER_BY.NEWEST]: 'publishedAt',
  [ARTICLES_ORDER_BY.RELEVANCE]: 'relevancy',
  [ARTICLES_ORDER_BY.OLDEST]: undefined
}

function paramsAdapter(options: ArticlesQueryParams): URL {
  const url = new URL('https://content.guardianapis.com/search')
  const query = options[SEARCH_PARAMS_KEYS.A_QUERY]
  const page = options[SEARCH_PARAMS_KEYS.A_PAGE]
  const pageSize = options[SEARCH_PARAMS_KEYS.A_PAGE_SIZE]
  const orderBy = options[SEARCH_PARAMS_KEYS.A_ORDER_BY] ? orderByMap[options[SEARCH_PARAMS_KEYS.A_ORDER_BY]] : undefined

  if (query) url.searchParams.set('q', query)
  if (!isNaN(Number(page))) url.searchParams.set('page', (page + 1).toString())
  if (pageSize) url.searchParams.set('page-size', pageSize.toString())
  if (orderBy) url.searchParams.set('sortBy', orderBy)

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
      title: article.webTitle,
      id: article.id
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
