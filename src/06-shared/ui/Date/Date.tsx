import { Text as MantineText } from '@mantine/core'

import { type DateProps } from './types'

function Date({
  children,
  date,
  className,
  lineClamp,
  size,
  inherit,
  color = 'primary',
  fz,
  ...rest
}: DateProps) {
  return (
    <MantineText
      c={color}
      className={className}
      component='time'
      dateTime={date.toISOString()}
      fz={fz}
      inherit={inherit}
      lineClamp={lineClamp}
      size={size}
      {...rest}
    >
      {children || date.toDateString()}
    </MantineText>
  )
}

export default Date
