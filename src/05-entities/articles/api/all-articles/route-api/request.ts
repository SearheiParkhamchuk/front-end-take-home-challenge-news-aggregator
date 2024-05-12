'use server'

import { type ArticlesQueryParams } from '../../@types'
import { NYTArticlesRouteApiRequest } from '../../new-york-times/get-many/route-api/request'
import { newsApiArticlesApiRequest } from '../../news-api/get-many/route-api/request'
import { theGuardianArticlesApiRequest } from '../../the-guardian/get-many/route-api/request'

const newsSourceQueries = [NYTArticlesRouteApiRequest, newsApiArticlesApiRequest, theGuardianArticlesApiRequest]

export async function getAllArticlesApiRequest(params: ArticlesQueryParams) {
  return await Promise.all(newsSourceQueries.map(async query => query(params)))
}
