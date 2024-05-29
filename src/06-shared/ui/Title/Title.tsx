import { Title as MantineTitle } from '@mantine/core'

import styles from './styles.module.scss'
import { type TitleProps } from './types'

function Title({
  order,
  size,
  children,
  textWrap,
  lineClamp,
  color = 'text-primary',
  textAlign,
  className,
  responsive,
  ...rest
}: TitleProps) {
  return (
    <MantineTitle
      c={color}
      className={`${className} ${responsive ? styles.responsive : ''}`}
      lineClamp={lineClamp}
      order={order}
      size={size}
      ta={textAlign}
      textWrap={textWrap}
      {...rest}
    >
      {children}
    </MantineTitle>
  )
}

export default Title
