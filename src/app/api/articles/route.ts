import { type NextRequest } from 'next/server'

import { getArticlesQueryParams } from '@/04-features/articles/lib/get-articles-query-params'
import { getAllArticlesApiRequest } from '@/05-entities/articles/api/all-articles/route-api/request'

export async function GET(request: NextRequest) {
  const params = getArticlesQueryParams(request.nextUrl.searchParams)
  const response = await getAllArticlesApiRequest(params)
  return Response.json(response)
}
