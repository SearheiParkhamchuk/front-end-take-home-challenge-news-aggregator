'use server'
import { type ArticlesQueryParams } from '@/04-features/articles/model/@types'

import { fakeNewsArticlesApiRequest } from '../../fake-news-source/get-many/route-api/request'
import { NYTArticlesRouteApiRequest } from '../../new-york-times/get-many/route-api/request'
import { newsApiArticlesApiRequest } from '../../news-api/get-many/route-api/request'
import { theGuardianArticlesApiRequest } from '../../the-guardian/get-many/route-api/request'

const newsSources = [NYTArticlesRouteApiRequest, newsApiArticlesApiRequest, theGuardianArticlesApiRequest]
const fakeNewsSources = [fakeNewsArticlesApiRequest]

const sources = process.env.NODE_ENV === 'development' ? fakeNewsSources : newsSources

export async function getAllArticlesApiRequest(params: ArticlesQueryParams) {
  return await Promise.all(sources.map(async query => query(params)))
}
