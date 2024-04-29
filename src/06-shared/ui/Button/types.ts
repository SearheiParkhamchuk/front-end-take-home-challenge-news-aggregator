import { type ButtonProps as MuiButtonProps } from '@mui/material'

export type ButtonProps = Pick<
MuiButtonProps,
| 'aria-label'
| 'children'
| 'className'
| 'color'
| 'endIcon'
| 'onClick'
| 'role'
| 'size'
| 'startIcon'
| 'tabIndex'
| 'variant'
| 'disabled'
| 'id'
| 'type'
| 'fullWidth'
> & { classes?: { startIcon?: string }, loading?: boolean }
