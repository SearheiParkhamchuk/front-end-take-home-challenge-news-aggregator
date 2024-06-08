import { Group as MantineGroup } from '@mantine/core'

import { type GroupProps } from './types'

function Group({ children, gap = 'sm', className = '', align, grow, justify, ...rest }: GroupProps) {
  return (
    <MantineGroup
      {...rest}
      align={align}
      className={className}
      gap={gap}
      grow={grow}
      justify={justify}
    >
      {children}
    </MantineGroup>
  )
}

export default Group
