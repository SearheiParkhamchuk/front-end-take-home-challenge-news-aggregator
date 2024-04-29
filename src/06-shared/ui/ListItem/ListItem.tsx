import { ListItem as MuiListItem } from '@mui/material'

import { type ListItemProps } from './types'

function ListItem({ children, dense, disableGutters, disablePadding, secondaryAction, divider, className, ...rest }: ListItemProps) {
  return (
    <MuiListItem
      {...rest}
      className={className}
      dense={dense}
      disableGutters={disableGutters}
      disablePadding={disablePadding}
      divider={divider}
      secondaryAction={secondaryAction}
    >
      {children}
    </MuiListItem>
  )
}

export default ListItem
