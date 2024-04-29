import { type ListItemProps as MuiListItemProps } from '@mui/material'

export type ListItemProps = Pick<
MuiListItemProps, 'children' | 'dense' | 'disableGutters' | 'disablePadding' | 'secondaryAction' | 'className' | 'divider'
>
