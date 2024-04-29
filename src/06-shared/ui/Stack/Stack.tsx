import { Divider } from '@mui/material'
import MuiStack from '@mui/material/Stack'

import { type StackProps } from './types'

function Stack({ children, spacing = 1, divider, className, direction = 'column', alignItems, justifyContent, ...rest }: StackProps) {
  return (
    <MuiStack
      {...rest}
      alignItems={alignItems}
      className={className}
      direction={direction}
      divider={
        divider && <Divider
          flexItem
          orientation={direction === 'column' || direction === 'column-reverse' ? 'horizontal' : 'vertical'}
        />
      }
      justifyContent={justifyContent}
      spacing={spacing}
    >
      {children}
    </MuiStack>
  )
}

export default Stack
