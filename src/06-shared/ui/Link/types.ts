import { type LinkProps as NextjsLinkProps } from 'next/link'
import { type AnchorHTMLAttributes } from 'react'

export type LinkProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> &
Pick<NextjsLinkProps, 'href' | 'onClick' | 'prefetch' | 'shallow' | 'replace'>
