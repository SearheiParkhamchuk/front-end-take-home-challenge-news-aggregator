import { type NextRequest } from 'next/server'

import { newsApiArticlesApiRequest } from '@/05-entities/articles/api/news-api/get-many/route-api/request'
import { getArticlesQueryParams } from '@/05-entities/articles/lib/get-articles-query-params'

export async function GET(request: NextRequest) {
  const params = getArticlesQueryParams(request.nextUrl.searchParams)
  const response = await newsApiArticlesApiRequest(params)
  return Response.json(response)
}
