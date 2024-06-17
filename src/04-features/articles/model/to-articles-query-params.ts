import { ARTICLES_SEARCH_PARAMS_KEYS, type ArticlesRequestParams } from 'src/05-entities/articles';

import { type ArticlesQueryParams } from './@types';

export function toArticlesQueryParams<A extends ArticlesRequestParams>(data: A): ArticlesQueryParams {
  return {
    [ARTICLES_SEARCH_PARAMS_KEYS.A_PAGE]: data.page,
    [ARTICLES_SEARCH_PARAMS_KEYS.A_PAGE_SIZE]: data.size,
    [ARTICLES_SEARCH_PARAMS_KEYS.A_QUERY]: data.query,
    [ARTICLES_SEARCH_PARAMS_KEYS.A_ORDER_BY]: data.order_by,
  };
}
