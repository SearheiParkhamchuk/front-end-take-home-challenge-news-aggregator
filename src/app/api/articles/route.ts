import { type NextRequest } from 'next/server'

import { ARTICLES_ORDER_BY } from '@/04-features/articles-sorting/model'
import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/model/search-params-keys'
import { pickEnumSearchParameter } from '@/06-shared/lib/third-party/router/pick-enum-search-parameter'
import { app } from '@/server/app'

const MIN_PAGE_SIZE = 1
const MAX_PAGE_SIZE = 50

const DEFAULT_PAGE = 0
const DEFAULT_PAGE_SIZE = MIN_PAGE_SIZE
const DEFAULT_ORDER = ARTICLES_ORDER_BY.NEWEST

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const pageParameter = Number(params.get(SEARCH_PARAMS_KEYS.A_PAGE))
  const sizeParameter = Number(params.get(SEARCH_PARAMS_KEYS.A_PAGE_SIZE))
  const queryParameter = params.get(SEARCH_PARAMS_KEYS.A_QUERY)
  const orderParameter = pickEnumSearchParameter(params, ARTICLES_ORDER_BY, SEARCH_PARAMS_KEYS.A_ORDER_BY) ?? DEFAULT_ORDER

  const page = isNaN(pageParameter) || pageParameter < 0 ? DEFAULT_PAGE : pageParameter
  const size = isNaN(sizeParameter) || sizeParameter > MAX_PAGE_SIZE || sizeParameter < MIN_PAGE_SIZE
    ? DEFAULT_PAGE_SIZE
    : sizeParameter

  const { newsRepository } = await app
  const result = await newsRepository.getMany({
    query: queryParameter,
    page,
    size,
    sort: {
      by: 'published_at',
      direction: orderParameter === ARTICLES_ORDER_BY.NEWEST ? 'DESC' : 'ASC'
    }
  })

  return Response.json({ data: result })
}
