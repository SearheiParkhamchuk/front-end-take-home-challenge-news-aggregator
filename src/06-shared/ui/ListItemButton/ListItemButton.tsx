import { ListItemButton as MuiListItemButton } from '@mui/material'

import { type ListItemButtonProps } from './types'

function ListItemButton({ children, disabled, selected, onClick, disableGutters, dataid, ...rest }: ListItemButtonProps) {
  return (
    <MuiListItemButton
      {...rest}
      aria-disabled={disabled}
      aria-selected={selected}
      data-item-id={dataid}
      disabled={disabled}
      disableGutters={disableGutters}
      selected={selected}
      onClick={onClick}
    >
      {children}
    </MuiListItemButton>
  )
}

export default ListItemButton
