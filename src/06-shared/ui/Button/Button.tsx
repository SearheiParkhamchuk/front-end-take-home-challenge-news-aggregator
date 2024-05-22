import { Button as MButton } from '@mantine/core'

import { type ForwardedRef, forwardRef } from 'react'

import { type ButtonProps } from './types'

function Button({
  'aria-label': ariaLabel,
  children,
  className,
  disabled,
  fullWidth,
  id,
  loading,
  onClick,
  role,
  rightSection,
  leftSection,
  tabIndex,
  type,
  size,
  style,
  variant,
  ...props
}: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
  return (
    <MButton
      {...props}
      autoContrast
      aria-label={ariaLabel}
      className={className}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      id={id}
      leftSection={leftSection}
      loading={loading}
      ref={ref}
      rightSection={rightSection}
      role={role}
      size={size}
      style={style}
      tabIndex={tabIndex}
      type={type}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </MButton>
  )
}

const ForwardedButton = forwardRef<HTMLButtonElement, ButtonProps>(Button)
ForwardedButton.displayName = 'Button'

export default ForwardedButton
