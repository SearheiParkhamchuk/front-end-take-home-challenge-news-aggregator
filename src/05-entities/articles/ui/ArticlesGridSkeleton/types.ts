import { type PropsWithChildren } from 'react';

import { type GRID_VIEW } from 'src/06-shared/ui/GridViewButton/model';

export type ArticlesGridSkeletonProps = PropsWithChildren<{
  view?: GRID_VIEW;
}>;
