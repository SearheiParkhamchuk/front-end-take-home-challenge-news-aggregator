import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import { type ArticlesQueryParams } from '@/05-entities/articles/api/types/Article'
import { pickFirstSearchParameter } from '@/06-shared/lib/third-party/router/pick-first-search-parameter'
import { type PolymorphicSearcParams } from '@/06-shared/lib/types/PolymorphicSearcParams'

export function getArticlesQueryParams(searchParams: PolymorphicSearcParams): ArticlesQueryParams {
  const page = pickFirstSearchParameter(searchParams, SEARCH_PARAMS_KEYS.PAGE)
  const query = pickFirstSearchParameter(searchParams, SEARCH_PARAMS_KEYS.ARTICLES_QUERY)

  return { page, query, pageSize: 10 }
}
