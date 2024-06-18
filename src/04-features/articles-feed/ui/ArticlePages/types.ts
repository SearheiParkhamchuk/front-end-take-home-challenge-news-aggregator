import { type ReactElement } from 'react';

import { type ARTICLE_ORIENTATION, type ArticleClient } from 'src/05-entities/articles';

export type ArticleRenderOptions = {
  articleIndex: number;
  page: string;
  pageIndex: number;
  orientation: ARTICLE_ORIENTATION;
};

export type ArticlesProps = {
  pages: ArticleClient[][];
  loading: boolean;
  renderItem: (article: ArticleClient, options: ArticleRenderOptions) => ReactElement;
};
