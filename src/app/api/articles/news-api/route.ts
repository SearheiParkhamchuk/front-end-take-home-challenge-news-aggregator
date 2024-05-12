import { type NextRequest } from 'next/server'

import { getArticlesQueryParams } from '@/04-features/articles/lib/get-articles-query-params'
import { newsApiArticlesApiRequest } from '@/05-entities/articles/api/news-api/get-many/route-api/request'

export async function GET(request: NextRequest) {
  const params = getArticlesQueryParams(request.nextUrl.searchParams)
  const response = await newsApiArticlesApiRequest(params)
  return Response.json(response)
}
