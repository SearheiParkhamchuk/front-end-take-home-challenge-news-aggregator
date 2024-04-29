import { ListItemText as MuiListItemText } from '@mui/material'

import { type ListItemTextProps } from './types'

function ListItemText({ children, inset, primary, secondary, ...rest }: ListItemTextProps) {
  return (
    <MuiListItemText
      {...rest}
      inset={inset}
      primary={primary}
      secondary={secondary}
    >
      {children}
    </MuiListItemText>
  )
}

export default ListItemText
