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
  const isoDate = date.toISOString()
  return (
    <MantineText
      c={color}
      className={className}
      component='time'
      dateTime={isoDate}
      fz={fz}
      inherit={inherit}
      lineClamp={lineClamp}
      size={size}
      title={isoDate}
      {...rest}
    >
      {children || relative ? formatRelative(isoDate, new Date().toISOString()) : isoDate}
    </MantineText>
  )
}

export default DateComponent
