import { ARTICLES_ORDER_BY } from 'src/04-features/articles-sorting/model';
import { SEARCH_PARAMS_KEYS } from 'src/05-entities/app/model/search-params-keys';
import { pickEnumSearchParameter } from 'src/06-shared/lib/third-party/router/pick-enum-search-parameter';

import { pickFirstSearchParameter } from 'src/06-shared/lib/third-party/router/pick-first-search-parameter';
import { type PolymorphicSearcParams } from 'src/06-shared/lib/types/PolymorphicSearcParams';

import { ARTICLES_DEFAULT_PAGE } from './default-page';

export function getArticlesQueryParams(searchParams: PolymorphicSearcParams) {
  const pageParameter = pickFirstSearchParameter(searchParams, SEARCH_PARAMS_KEYS.A_PAGE);
  const queryParameter = pickFirstSearchParameter(searchParams, SEARCH_PARAMS_KEYS.A_QUERY);
  const orderByParameter = pickEnumSearchParameter(searchParams, ARTICLES_ORDER_BY, SEARCH_PARAMS_KEYS.A_ORDER_BY);

  const page = isNaN(Number(pageParameter)) || !pageParameter ? ARTICLES_DEFAULT_PAGE : pageParameter;
  const query = queryParameter?.trim() ?? '';
  const pageSize = '10';

  return {
    [SEARCH_PARAMS_KEYS.A_QUERY]: query,
    [SEARCH_PARAMS_KEYS.A_PAGE]: page,
    [SEARCH_PARAMS_KEYS.A_PAGE_SIZE]: pageSize,
    [SEARCH_PARAMS_KEYS.A_ORDER_BY]: orderByParameter,
  };
}
