import { type ApiResponse } from 'src/06-shared/lib/utils/errors/types/ApiResponse';

import { type ARTICLES_ORDER_BY } from '../../constants/articles-order-by';
import { type ArticleMedia } from '../../model/@types';

export type ArticleServer = {
  media: {
    images: ArticleMedia[];
  };
  published_at: string;
  source_name: string;
  source_url: string;
  title: string;
  uuid: string;
  description?: string;
  id?: string;
  thumbnail?: string;
};

export type ArticlesResponse = ApiResponse<ArticleServer[]>;

export type ArticlesRequestParams = {
  page: string;
  size?: string;
  query?: string;
  order_by?: ARTICLES_ORDER_BY;
  filterByCategories?: string;
};
