import { StyledTypography } from './styles'
import { type TypographyProps } from './types'

function Typography({
  children,
  variant,
  align,
  gutterBottom,
  noWrap,
  className,
  dangerouslySetInnerHTML,
  color = 'inherit',
  ...rest
}: TypographyProps) {
  return (
    <StyledTypography
      {...rest}
      $color={color}
      align={align}
      className={className}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      variant={variant}
    >
      {children}
    </StyledTypography>
  )
}

export default Typography
