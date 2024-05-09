import { Tooltip as MTooltip } from '@mantine/core'

import { type TooltipProps } from './types'

const events = { touch: true, focus: true, hover: true }

function Tooltip({ children, label, ...rest }: TooltipProps) {
  return (
    <MTooltip
      withArrow
      events={events}
      label={label}
      offset={5}
      {...rest}
    >
      {children}
    </MTooltip>
  )
}

export default Tooltip
