import { type NextRequest } from 'next/server'

import { theGuardianArticlesApiRequest } from '@/05-entities/articles/api/the-guardian/get-many/route-api/request'
import { getArticlesQueryParams } from '@/05-entities/articles/lib/get-articles-query-params'

export async function GET(request: NextRequest) {
  const params = getArticlesQueryParams(request.nextUrl.searchParams)
  const response = await theGuardianArticlesApiRequest(params)
  return Response.json(response)
}
