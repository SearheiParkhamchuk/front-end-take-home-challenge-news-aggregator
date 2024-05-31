'use client'
import { Text as MantineText } from '@mantine/core'
import { useFormatter } from 'next-intl'

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
  const format = useFormatter()

  const formatted = format.dateTime(date, { dateStyle: 'full', timeStyle: 'short' })

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
      title={formatted}
      {...rest}
    >
      {children || relative ? format.relativeTime(date) : formatted}
    </MantineText>
  )
}

export default DateComponent
