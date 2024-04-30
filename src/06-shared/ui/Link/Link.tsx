import { type ForwardedRef, forwardRef } from 'react'

import { StyledLink } from './styles'
import { type LinkProps } from './types'

function Link({
  children,
  href,
  shallow,
  prefetch,
  replace,
  className,
  target,
  rel,
  onClick,
  ...rest
}: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) {
  return (
    <StyledLink
      {...rest}
      className={className}
      href={href}
      prefetch={prefetch}
      ref={ref}
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

const ForwardedLink = forwardRef<HTMLAnchorElement, LinkProps>(Link)
ForwardedLink.displayName = 'Link'

export default ForwardedLink
