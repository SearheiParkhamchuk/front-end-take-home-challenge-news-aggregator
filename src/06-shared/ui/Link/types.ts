import { type ButtonProps } from '@mantine/core';
import { type AnchorHTMLAttributes } from 'react';

export type LinkProps = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'onClick' | 'children' | 'className' | 'target' | 'rel' | 'title' | 'style'
> &
  Pick<ButtonProps, 'loading'> & {
    component?: 'button' | 'link';
    decoration?: 'none' | 'underline';
    reload?: boolean;
    href: string;
  };
