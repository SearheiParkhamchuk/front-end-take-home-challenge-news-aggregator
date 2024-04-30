import { StyledLink } from './styles'
import { type LinkProps } from './types'

function Link({ children, href, shallow, prefetch, replace, className, target, rel, onClick, ...rest }: LinkProps) {
  return (
    <StyledLink
      {...rest}
      className={className}
      href={href}
      prefetch={prefetch}
      rel={rel}
      replace={replace}
      shallow={shallow}
      target={target}
      onClick={onClick}
    >
      {children}
    </StyledLink>
  )
}

export default Link
