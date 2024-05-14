'use server'
import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import { getArticlesQueryParams } from '@/05-entities/articles/lib/get-articles-query-params'
import { withError } from '@/06-shared/lib/utils/errors/decorators/with-error'

import { UnhandledErrorHandler } from '@/06-shared/lib/utils/errors/handlers/UnhandledErrorHandler'

import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../../@types'
import fakeData from '../../articles.json'

const sleep = async (wait: number) => new Promise((resolve) => setTimeout(resolve, wait))

export async function request(params: ArticlesQueryParams): Promise<ArticleSerializedResponseQueryMany> {
  const articlesPageParams = getArticlesQueryParams(params)

  const filteredData = fakeData.filter((article) => {
    if (!params.a_query) return true
    const { title, description } = article
    return title.toLowerCase().includes(params.a_query.toLowerCase()) ||
           description.toLowerCase().includes(params.a_query.toLowerCase())
  })

  await sleep(1000)

  const pageSize = Number(articlesPageParams.pageSize)
  const page = Number(articlesPageParams[SEARCH_PARAMS_KEYS.A_PAGE]) - 1

  return { error: null, data: { data: filteredData.slice(pageSize * page, pageSize * page + pageSize) } }
}

export const fakeNewsArticlesApiRequest = withError(request, new UnhandledErrorHandler(null))
