import { IconButton as MuiIconButton } from '@mui/material'

import { type IconButtonProps } from './types'

function IconButton({ 'aria-label': ariaLabel, children, size, color, disabled, onClick, className, ...rest }: IconButtonProps) {
  return (
    <MuiIconButton
      {...rest}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      className={className}
      color={color}
      disabled={disabled}
      size={size}
      onClick={onClick}
    >
      {children}
    </MuiIconButton>
  )
}

export default IconButton
