import { ARTICLES_SEARCH_PARAMS_KEYS, type ArticlesRequestParams } from 'src/05-entities/articles';

import { type ArticlesQueryParams } from './@types';

export function toClientArticlesQueryParams(params: ArticlesQueryParams): ArticlesRequestParams {
  return {
    page: params[ARTICLES_SEARCH_PARAMS_KEYS.A_PAGE],
    size: params[ARTICLES_SEARCH_PARAMS_KEYS.A_PAGE_SIZE],
    query: params[ARTICLES_SEARCH_PARAMS_KEYS.A_QUERY],
    order_by: params[ARTICLES_SEARCH_PARAMS_KEYS.A_ORDER_BY],
  };
}
