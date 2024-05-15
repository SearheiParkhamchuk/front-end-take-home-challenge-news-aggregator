import { type ReactNode } from 'react'

import { type GRID_VIEW } from '@/06-shared/ui/GridViewButton/model'

export type ArticlesGridViewProps = {
  children: ({ view }: { view: GRID_VIEW }) => ReactNode
}
