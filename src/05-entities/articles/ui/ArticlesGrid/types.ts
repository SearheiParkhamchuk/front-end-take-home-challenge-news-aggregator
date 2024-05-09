import { type PropsWithChildren } from 'react'

import { type GRID_VIEW } from '@/06-shared/ui/GridViewButton/model'

export type ArticlesGridProps = PropsWithChildren<{
  view?: GRID_VIEW
}>
