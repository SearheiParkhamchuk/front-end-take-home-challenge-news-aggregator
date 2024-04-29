import { type ListItemButtonProps as MuiListItemButtonProps } from '@mui/material'

export type ListItemButtonProps = Pick<MuiListItemButtonProps, 'children' | 'disabled' | 'selected' | 'onClick' | 'disableGutters'> & {
  dataid?: string | number
}
