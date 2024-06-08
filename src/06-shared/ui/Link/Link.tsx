import { Button } from '@mantine/core'
import NextLink from 'next/link'
import { type ForwardedRef, forwardRef } from 'react'

import styles from './styles.module.scss'
import { type LinkProps } from './types'

function Link({
  children,
  href,
  className = '',
  target,
  rel,
  loading,
  component = 'link',
  decoration = 'underline',
  reload,
  onClick,
  ...rest
}: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) {
  const props = {
    ...rest,
    'className': `${className} ${styles.link} ${styles[decoration]}`,
    'disabled': loading,
    href,
    ref,
    rel,
    target,
    children,
    onClick
  }

  if (component === 'link') return reload ? <a {...props} /> : <NextLink {...props} />
  return <Button component={NextLink} loading={loading} {...props} />
}

const ForwardedLink = forwardRef<HTMLAnchorElement, LinkProps>(Link)
ForwardedLink.displayName = 'Link'

export default ForwardedLink
