import { type MouseEventHandler, type PropsWithChildren } from 'react';

export type LoadMoreButtonProps = PropsWithChildren<{
  href: string;
  loading?: boolean;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}>;
