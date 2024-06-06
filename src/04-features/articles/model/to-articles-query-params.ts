import { SEARCH_PARAMS_KEYS } from 'src/05-entities/app/model/search-params-keys';

import { type ArticlesClientQueryParams, type ArticlesQueryParams } from './@types';

export function toArticlesQueryParams<A extends ArticlesClientQueryParams>(data: A): ArticlesQueryParams {
  return {
    [SEARCH_PARAMS_KEYS.A_PAGE]: data.page,
    [SEARCH_PARAMS_KEYS.A_PAGE_SIZE]: data.size,
    [SEARCH_PARAMS_KEYS.A_QUERY]: data.query,
    [SEARCH_PARAMS_KEYS.A_ORDER_BY]: data.order_by,
  };
}
