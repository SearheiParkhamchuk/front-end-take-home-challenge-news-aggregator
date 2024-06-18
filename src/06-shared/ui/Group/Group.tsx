import { Group as MantineGroup } from '@mantine/core'

import { type GroupProps } from './types'

function Group({ children, gap = 'sm', className = '', w, align, grow, padding, justify, ...rest }: GroupProps) {
  return (
    <MantineGroup
      {...rest}
      align={align}
      className={className}
      gap={gap}
      grow={grow}
      justify={justify}
      p={padding}
      w={w}
    >
      {children}
    </MantineGroup>
  )
}

export default Group
