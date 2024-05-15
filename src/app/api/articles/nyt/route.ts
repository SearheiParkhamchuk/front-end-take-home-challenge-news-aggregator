import { type NextRequest } from 'next/server'

import { NYTArticlesRouteApiRequest } from '@/04-features/articles/api/news-sources/new-york-times/get-many/route-api/request'
import { getArticlesQueryParams } from '@/04-features/articles/model/get-articles-query-params'

export async function GET(request: NextRequest) {
  const params = getArticlesQueryParams(request.nextUrl.searchParams)
  const response = await NYTArticlesRouteApiRequest(params)
  return Response.json(response)
}
