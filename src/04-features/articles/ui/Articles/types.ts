import { type ReactElement } from 'react';

import { type ArticlesRequestParams } from 'src/05-entities/articles';
import { type GRID_VIEW } from 'src/06-shared/ui/GridViewButton/model';

export type ArticleRenderOptions = {
  articleIndex: number;
  page: string;
  pageIndex: number;
};

export type ArticlesProps = {
  view: GRID_VIEW;
  params: ArticlesRequestParams;
  renderItem?: (article: ReactElement, options: ArticleRenderOptions) => ReactElement;
};
