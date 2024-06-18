import { SegmentedControl } from '@mantine/core'

import { type ForwardedRef, forwardRef } from 'react'

import { type ButtonSegmentedProps } from './types'

function ButtonSegmented(
  { data, name, value, disabled, className = '', size, onChange, ...rest }: ButtonSegmentedProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <SegmentedControl
      {...rest}
      className={className}
      color='primary'
      data={data}
      disabled={disabled}
      name={name}
      ref={ref}
      size={size}
      value={value}
      onChange={onChange}
    />
  )
}

export default forwardRef<HTMLDivElement, ButtonSegmentedProps>(ButtonSegmented)
