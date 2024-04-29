import { type TypographyProps as MuiTypographyProps } from '@mui/material'

export type TypographyColor = 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info' | 'text' | 'text.light' | 'inherit'

export type TypographyProps = Pick<
MuiTypographyProps,
'children' | 'variant' | 'noWrap' | 'gutterBottom' | 'align' | 'className'
> & { color?: TypographyColor }
