import { type ArticleServer, type ArticlesRequestParams } from './api/articles-infinite/@types';
import { articlesRequest } from './api/articles-infinite/request';

import { ARTICLE_ORIENTATION } from './constants/article-orientation';
import { ARTICLES_ORDER_BY } from './constants/articles-order-by';
import { ARTICLES_SEARCH_PARAMS_KEYS } from './constants/articles-search-params-keys';
import { ARTICLES_DEFAULT_PAGE } from './constants/default-page';
import { type ArticleClient } from './model/@types';
import { getArticlesQueryParams } from './model/get-articles-query-params';
import { prepareArticles } from './model/prepare-articles';

const articlesSharedApi = { articlesRequest };
const articlesModel = { prepareArticles, getArticlesQueryParams };

export { ARTICLE_ORIENTATION, ARTICLES_ORDER_BY, ARTICLES_SEARCH_PARAMS_KEYS, ARTICLES_DEFAULT_PAGE };
export { articlesSharedApi, articlesModel };
export { type ArticlesRequestParams, type ArticleServer, type ArticleClient };
