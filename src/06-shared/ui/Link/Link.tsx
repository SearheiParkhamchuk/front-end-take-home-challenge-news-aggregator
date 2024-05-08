import NextLink from 'next/link'
import { type ForwardedRef, forwardRef } from 'react'

import styles from './styles.module.scss'
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
    <NextLink
      {...rest}
      className={`${className} ${styles.link}`}
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
    </NextLink>
  )
}

const ForwardedLink = forwardRef<HTMLAnchorElement, LinkProps>(Link)
ForwardedLink.displayName = 'Link'

export default ForwardedLink
