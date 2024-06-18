import { Chip as MantineChip } from '@mantine/core'

import { type ForwardedRef, forwardRef } from 'react'

import { type ChipProps } from './types'

function Chip(
  { children, size, checked, color, variant, value, onChange }: ChipProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <MantineChip
      autoContrast
      checked={checked}
      color={color}
      ref={ref}
      size={size}
      value={value}
      variant={variant}
      onChange={onChange}
    >
      {children}
    </MantineChip>
  )
}

const ForwardedRefChip = forwardRef<HTMLInputElement, ChipProps>(Chip)
ForwardedRefChip.displayName = 'Chip'

export default ForwardedRefChip