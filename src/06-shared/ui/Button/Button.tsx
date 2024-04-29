import { CircularProgress, Button as MuiButton } from '@mui/material'

import { type ButtonProps } from './types'

function Button({
  'aria-label': ariaLabel,
  children,
  className,
  color,
  disabled,
  endIcon,
  fullWidth,
  id,
  loading,
  onClick,
  role,
  size,
  startIcon,
  tabIndex,
  type,
  variant,
  classes,
  ...props
}: ButtonProps
) {
  return (
    <MuiButton
      {...props}
      aria-disabled={disabled || loading}
      aria-label={ariaLabel}
      classes={classes}
      className={className}
      color={color}
      disabled={disabled || loading}
      endIcon={endIcon}
      fullWidth={fullWidth}
      id={id}
      role={role}
      size={size}
      startIcon={loading ? <CircularProgress color='inherit' size={16} /> : startIcon}
      tabIndex={tabIndex}
      type={type}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  )
}

export default Button
