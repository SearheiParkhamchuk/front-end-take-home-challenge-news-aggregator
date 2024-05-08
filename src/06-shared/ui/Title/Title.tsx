import { Title as MantineTitle } from '@mantine/core'

import { type TitleProps } from './types'

function Title({ order, size, children, textWrap, lineClamp, color = 'text-primary', className, ...rest }: TitleProps) {
  return (
    <MantineTitle
      c={color}
      className={className}
      lineClamp={lineClamp}
      order={order}
      size={size}
      textWrap={textWrap}
      {...rest}
    >
      {children}
    </MantineTitle>
  )
}

export default Title
