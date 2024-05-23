import { VisuallyHidden } from '@mantine/core'
import { IconLayoutGridFilled, IconList } from '@tabler/icons-react'

export enum GRID_VIEW {
  LIST = 'list',
  GRID = 'grid'
}

export const model = [{
  value: GRID_VIEW.LIST,
  label: (
    <>
      <IconList style={{ display: 'block' }} />
      <VisuallyHidden>List view</VisuallyHidden>
    </>
  )
},
{
  value: GRID_VIEW.GRID,
  label: (
    <>
      <IconLayoutGridFilled style={{ display: 'block' }} />
      <VisuallyHidden>Grid view</VisuallyHidden>
    </>
  )
}]
