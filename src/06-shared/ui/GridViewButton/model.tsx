import { IconLayoutGridFilled, IconList } from '@tabler/icons-react'

import Tooltip from '@/06-shared/ui/Tooltip'

export enum GRID_VIEW {
  LIST = 'list',
  GRID = 'grid'
}

export const model = [{
  value: GRID_VIEW.LIST,
  label: (
    <Tooltip label='List view'><IconList style={{ display: 'block' }} /></Tooltip>
  )
},
{
  value: GRID_VIEW.GRID,
  label: (
    <Tooltip label='Grid view'><IconLayoutGridFilled style={{ display: 'block' }} /></Tooltip>
  )
}]
