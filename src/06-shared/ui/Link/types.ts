import { type ButtonProps } from '@mantine/core'
import { type LinkProps as NextjsLinkProps } from 'next/link'
import { type AnchorHTMLAttributes } from 'react'

export type LinkProps =
Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className' | 'target' | 'rel'> &
Pick<NextjsLinkProps, 'href' | 'onClick' | 'prefetch' | 'shallow' | 'replace'> &
Pick<ButtonProps, 'loading'> & { component?: 'button' | 'link' }
