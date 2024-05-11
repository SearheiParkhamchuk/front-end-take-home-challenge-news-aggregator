'use server'
import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import { getFetcherInstance } from '@/06-shared/lib/third-party/fetcher/get-fetcher-instance'

import { withError } from '@/06-shared/lib/utils/errors/decorators/with-error'

import { UnhandledErrorHandler } from '@/06-shared/lib/utils/errors/handlers/UnhandledErrorHandler'

import { type QueryParams, type QuerySuccess } from './@types'
import { NewsApiErrorHandler } from './error-handler'
import { type Article, type ArticleResponseQueryMany } from '../../types/Article'

function paramsAdapter(options: QueryParams): URL {
  const url = new URL('https://newsapi.org/v2/everything')

  const query = options[SEARCH_PARAMS_KEYS.A_QUERY]
  const page = options[SEARCH_PARAMS_KEYS.A_PAGE]

  if (query) url.searchParams.set('q', query)
  if (page) url.searchParams.set('page', page.toString())
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

async function serverQuery(params: QueryParams): Promise<ArticleResponseQueryMany> {
  const response = await getFetcherInstance().request<QuerySuccess>({
    method: 'GET',
    url: paramsAdapter(params).toString()
  })

  return { error: null, data: responseAdapter(response.data) }
}

export const newsApiArticlesServerQuery = withError(serverQuery, new NewsApiErrorHandler(new UnhandledErrorHandler(null)))
