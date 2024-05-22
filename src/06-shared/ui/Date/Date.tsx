import { Text as MantineText } from '@mantine/core'
import { formatRelative } from 'date-fns'

import { type DateProps } from './types'

function DateComponent({
  children,
  date,
  className,
  lineClamp,
  size,
  inherit,
  color = 'primary',
  fz,
  relative,
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
      title={date.toLocaleString()}
      {...rest}
    >
      {children || relative ? formatRelative(date, new Date()) : date.toDateString()}
    </MantineText>
  )
}

export default DateComponent
