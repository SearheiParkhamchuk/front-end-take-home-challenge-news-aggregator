import { type IconButtonProps as MuiIconButtonProps } from '@mui/material'

export type IconButtonProps = Pick<
MuiIconButtonProps, 'aria-label' | 'onClick' | 'children' | 'disabled' | 'color' | 'size' | 'className'
>
