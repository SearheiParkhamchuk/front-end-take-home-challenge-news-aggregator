import { type NextRequest } from 'next/server'

import { getArticlesQueryParams } from '@/04-features/articles/lib/get-articles-query-params'
import { theGuardianArticlesApiRequest } from '@/05-entities/articles/api/the-guardian/get-many/route-api/request'

export async function GET(request: NextRequest) {
  const params = getArticlesQueryParams(request.nextUrl.searchParams)
  const response = await theGuardianArticlesApiRequest(params)
  return Response.json(response)
}
