import { type NextRequest } from 'next/server'

import { getAllArticlesApiRequest } from '@/05-entities/articles/api/all-articles/route-api/request'
import { getArticlesQueryParams } from '@/05-entities/articles/lib/get-articles-query-params'

export async function GET(request: NextRequest) {
  const params = getArticlesQueryParams(request.nextUrl.searchParams)
  const response = await getAllArticlesApiRequest(params)
  return Response.json(response)
}
