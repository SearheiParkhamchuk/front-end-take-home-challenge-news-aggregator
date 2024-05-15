import { type NextRequest } from 'next/server'

import { getAllArticlesApiRequest } from '@/04-features/articles/api/news-sources/all-articles/route-api/request'
import { getArticlesQueryParams } from '@/04-features/articles/model/get-articles-query-params'

export async function GET(request: NextRequest) {
  const params = getArticlesQueryParams(request.nextUrl.searchParams)
  const response = await getAllArticlesApiRequest(params)
  return Response.json(response)
}
