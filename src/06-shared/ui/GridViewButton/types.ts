import { type ComponentProps } from 'react'

import { type GRID_VIEW } from './model'
import type ButtonSegmented from '../ButtonSegmented'

export type GridViewButtonProps = Pick<ComponentProps<typeof ButtonSegmented>, 'disabled' | 'className'> & {
  onChange: (value: GRID_VIEW) => void
  value: GRID_VIEW
}
