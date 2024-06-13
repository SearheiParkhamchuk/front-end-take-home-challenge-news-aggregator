import { Group as MantineGroup } from '@mantine/core'

import { type GroupProps } from './types'

function Group({ children, gap = 'sm', className = '', align, grow, padding, justify, ...rest }: GroupProps) {
  return (
    <MantineGroup
      {...rest}
      align={align}
      className={className}
      gap={gap}
      grow={grow}
      justify={justify}
      p={padding}
    >
      {children}
    </MantineGroup>
  )
}

export default Group
