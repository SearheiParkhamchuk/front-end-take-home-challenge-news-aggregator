import { SegmentedControl } from '@mantine/core'

import { type ButtonSegmentedProps } from './types'

function ButtonSegmented({ data, name, value, disabled, className, onChange, ...rest }: ButtonSegmentedProps) {
  return (
    <SegmentedControl
      {...rest}
      autoContrast
      className={className}
      color='primary'
      data={data}
      disabled={disabled}
      name={name}
      value={value}
      onChange={onChange}
    />
  )
}

export default ButtonSegmented
