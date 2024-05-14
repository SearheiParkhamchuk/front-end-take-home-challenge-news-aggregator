'use server'
import { type ArticlesQueryParams } from '../../@types'
import { fakeNewsArticlesApiRequest } from '../../fake-news-source/get-many/route-api/request'
import { NYTArticlesRouteApiRequest } from '../../new-york-times/get-many/route-api/request'
import { newsApiArticlesApiRequest } from '../../news-api/get-many/route-api/request'
import { theGuardianArticlesApiRequest } from '../../the-guardian/get-many/route-api/request'

const newsSourceQueries = [NYTArticlesRouteApiRequest, newsApiArticlesApiRequest, theGuardianArticlesApiRequest]
const fakeNewsSources = [fakeNewsArticlesApiRequest]

const newsSources = process.env.NODE_ENV === 'development' ? fakeNewsSources : newsSourceQueries

export async function getAllArticlesApiRequest(params: ArticlesQueryParams) {
  return await Promise.all(newsSources.map(async query => query(params)))
}
