import { type SvgIcon } from '@mui/material'

export type IconSizes = 'small' | 'x-medium' | 'medium' | 'large' | 'extra-large' | 'x-extra-large' | 'inherit'

export type IconProps = {
  Component: typeof SvgIcon
  'aria-label'?: string
  className?: string
  size?: IconSizes
}
