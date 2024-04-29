import { type ListProps as MuiListProps } from '@mui/material'

export type ListProps = Pick<MuiListProps, 'children' | 'dense' | 'disablePadding' | 'className'>
