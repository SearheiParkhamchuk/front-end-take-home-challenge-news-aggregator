'use server'
import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import { getFetcherInstance } from '@/06-shared/lib/third-party/fetcher/get-fetcher-instance'
import { withError } from '@/06-shared/lib/utils/errors/decorators/with-error'
import { UnhandledErrorHandler } from '@/06-shared/lib/utils/errors/handlers/UnhandledErrorHandler'

import { type QuerySuccess } from './@types'
import { NewsApiErrorHandler } from './error-handler'
import { type ArticleSerialized, type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../../@types'

function paramsAdapter(options: ArticlesQueryParams): URL {
  const url = new URL('https://newsapi.org/v2/everything')

  const query = options[SEARCH_PARAMS_KEYS.A_QUERY]
  const page = options[SEARCH_PARAMS_KEYS.A_PAGE]
  const pageSize = options[SEARCH_PARAMS_KEYS.A_PAGE_SIZE]

  if (query) url.searchParams.set('q', query)
  if (page) url.searchParams.set('page', page.toString())
  if (pageSize) url.searchParams.set('pageSize', pageSize.toString())
  url.searchParams.set('apiKey', process.env.API_KEY_NEWS_API)

  return url
}

function responseAdapter(data: QuerySuccess): { data: ArticleSerialized[] } {
  return {
    data: data.articles.map(article => ({
      description: article.description,
      publishedAt: article.publishedAt,
      source: { name: article.source.name, src: article.url },
      thumbnail: article.urlToImage,
      title: article.title
    }))
  }
}

async function request(params: ArticlesQueryParams): Promise<ArticleSerializedResponseQueryMany> {
  const response = await getFetcherInstance().request<QuerySuccess>({
    method: 'GET',
    url: paramsAdapter(params).toString()
  })

  return { error: null, data: responseAdapter(response.data) }
}

export const newsApiArticlesApiRequest = withError(request, new NewsApiErrorHandler(new UnhandledErrorHandler(null)))
