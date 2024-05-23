import { Switch as MantineSwitch } from '@mantine/core'

import { type ForwardedRef, forwardRef, memo } from 'react'

import { type SwitchProps } from './types'

function Switch(
  { checked, size, onChange, onLabel, offLabel, disabled, className, ...rest }: SwitchProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <MantineSwitch
      {...rest}
      checked={checked}
      className={className}
      disabled={disabled}
      offLabel={offLabel}
      ref={ref}
      size={size}
      onChange={onChange}
      onLabel={onLabel}
    />
  )
}

const ForwardedRefSwitch = forwardRef<HTMLInputElement, SwitchProps>(Switch)
ForwardedRefSwitch.displayName = 'Switch'

export default memo(ForwardedRefSwitch)
