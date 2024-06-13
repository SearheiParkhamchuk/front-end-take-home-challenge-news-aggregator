import { type PropsWithChildren } from 'react';

export type InfiniteScrollProps = PropsWithChildren<{
  onLastPage: () => void;
  onPage: (page: string) => void;
}>;
