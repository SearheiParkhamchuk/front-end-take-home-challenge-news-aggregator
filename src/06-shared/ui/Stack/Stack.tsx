import { Stack as MantineStack } from '@mantine/core'

import { type StackProps } from './types'

function Stack({ children, gap = 'xs', className = '', align, justify, ...rest }: StackProps) {
  return (
    <MantineStack
      {...rest}
      align={align}
      className={className}
      gap={gap}
      justify={justify}
    >
      {children}
    </MantineStack>
  )
}

export default Stack
