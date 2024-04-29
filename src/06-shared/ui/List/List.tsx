import { List as MuiList } from '@mui/material'

import { type ListProps } from './types'

function List({ children, dense, disablePadding, className, ...rest }: ListProps) {
  return (
    <MuiList
      {...rest}
      className={className}
      dense={dense}
      disablePadding={disablePadding}
    >
      {children}
    </MuiList>
  )
}

export default List
