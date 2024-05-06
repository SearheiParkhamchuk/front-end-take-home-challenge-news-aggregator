import { Button as MButton } from '@mantine/core'

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
  ...props
}: ButtonProps
) {
  return (
    <MButton
      {...props}
      autoContrast
      aria-disabled={disabled || loading}
      aria-label={ariaLabel}
      className={className}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      id={id}
      leftSection={leftSection}
      rightSection={rightSection}
      role={role}
      size={size}
      tabIndex={tabIndex}
      type={type}
      onClick={onClick}
    >
      {children}
    </MButton>
  )
}

export default Button
