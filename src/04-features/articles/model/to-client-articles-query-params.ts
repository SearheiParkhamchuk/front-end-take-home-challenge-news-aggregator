import { SEARCH_PARAMS_KEYS } from 'src/05-entities/app/model/search-params-keys';

import { type ArticlesClientQueryParams, type ArticlesQueryParams } from './@types';

export function toClientArticlesQueryParams(params: ArticlesQueryParams): ArticlesClientQueryParams {
  return {
    page: params[SEARCH_PARAMS_KEYS.A_PAGE],
    size: params[SEARCH_PARAMS_KEYS.A_PAGE_SIZE],
    query: params[SEARCH_PARAMS_KEYS.A_QUERY],
    order_by: params[SEARCH_PARAMS_KEYS.A_ORDER_BY],
  };
}
