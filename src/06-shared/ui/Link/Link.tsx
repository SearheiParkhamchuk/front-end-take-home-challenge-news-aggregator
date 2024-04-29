import { StyledLink } from './styles'
import { type LinkProps } from './types'

function Link({ children, href, shallow, prefetch, replace, className, onClick, ...rest }: LinkProps) {
  return (
    <StyledLink
      {...rest}
      className={className}
      href={href}
      prefetch={prefetch}
      replace={replace}
      shallow={shallow}
      onClick={onClick}
    >
      {children}
    </StyledLink>
  )
}

export default Link
