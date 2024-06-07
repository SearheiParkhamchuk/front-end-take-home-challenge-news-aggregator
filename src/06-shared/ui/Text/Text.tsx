import { Text as MantineText } from '@mantine/core'

import { type TextProps } from './types'

function Text({
  children,
  className = '',
  lineClamp,
  size,
  inherit,
  color = 'text-primary',
  dangerouslySetInnerHTML,
  fz,
  span,
  ...rest
}: TextProps) {
  return (
    <MantineText
      c={color}
      className={className}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML ? { __html: dangerouslySetInnerHTML } : undefined}
      fz={fz}
      inherit={inherit}
      lineClamp={lineClamp}
      size={size}
      span={span}
      {...rest}
    >
      {children}
    </MantineText>
  )
}

export default Text
