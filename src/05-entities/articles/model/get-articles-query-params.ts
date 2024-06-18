import {
  ARTICLES_DEFAULT_PAGE,
  ARTICLES_ORDER_BY,
  ARTICLES_SEARCH_PARAMS_KEYS,
  type ArticlesRequestParams,
} from 'src/05-entities/articles';
import { NEWS_CATEGORIES_SEARCH_PARAMS } from 'src/05-entities/news-categories';
import { pickEnumSearchParameter } from 'src/06-shared/lib/third-party/router/pick-enum-search-parameter';

import { pickFirstSearchParameter } from 'src/06-shared/lib/third-party/router/pick-first-search-parameter';
import { type PolymorphicSearcParams } from 'src/06-shared/lib/types/PolymorphicSearcParams';

export function getArticlesQueryParams(searchParams: PolymorphicSearcParams): ArticlesRequestParams {
  const pageParameter = pickFirstSearchParameter(searchParams, ARTICLES_SEARCH_PARAMS_KEYS.A_PAGE);
  const queryParameter = pickFirstSearchParameter(searchParams, ARTICLES_SEARCH_PARAMS_KEYS.A_QUERY);
  const orderByParameter = pickEnumSearchParameter(searchParams, ARTICLES_ORDER_BY, ARTICLES_SEARCH_PARAMS_KEYS.A_ORDER_BY);
  const filterByCategories = pickFirstSearchParameter(searchParams, NEWS_CATEGORIES_SEARCH_PARAMS.NEWS_CATEGORIES);

  const page = isNaN(Number(pageParameter)) || !pageParameter ? ARTICLES_DEFAULT_PAGE : pageParameter;
  const query = queryParameter?.trim() ?? '';
  const size = '10';

  return { page, size, query, order_by: orderByParameter, filterByCategories };
}
