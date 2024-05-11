import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import { type ArticlesQueryParams } from '@/05-entities/articles/api/types/Article'
import { pickFirstSearchParameter } from '@/06-shared/lib/third-party/router/pick-first-search-parameter'
import { type PolymorphicSearcParams } from '@/06-shared/lib/types/PolymorphicSearcParams'

export function getArticlesQueryParams(searchParams: PolymorphicSearcParams): ArticlesQueryParams {
  const pageParameter = pickFirstSearchParameter(searchParams, SEARCH_PARAMS_KEYS.A_PAGE)
  const queryParameter = pickFirstSearchParameter(searchParams, SEARCH_PARAMS_KEYS.A_QUERY)

  const page = isNaN(Number(pageParameter)) ? '1' : pageParameter
  const query = queryParameter?.trim() ?? ''
  const pageSize = 10

  return { [SEARCH_PARAMS_KEYS.A_QUERY]: query, [SEARCH_PARAMS_KEYS.A_PAGE]: page, pageSize }
}
