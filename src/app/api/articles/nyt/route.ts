import { type NextRequest } from 'next/server'

import { getArticlesQueryParams } from '@/04-features/articles/lib/get-articles-query-params'
import { NYTArticlesRouteApiRequest } from '@/05-entities/articles/api/new-york-times/get-many/route-api/request'

export async function GET(request: NextRequest) {
  const params = getArticlesQueryParams(request.nextUrl.searchParams)
  const response = await NYTArticlesRouteApiRequest(params)
  return Response.json(response)
}
