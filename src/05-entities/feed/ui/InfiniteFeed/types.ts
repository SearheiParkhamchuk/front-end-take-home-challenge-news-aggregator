import { type PropsWithChildren, type ReactElement } from 'react';

export type InfiniteFeedProps = PropsWithChildren<{
  LoadNext: ReactElement;
  LoadPrevious: ReactElement | null;
  onLastPage: () => void;
  onPage: (page: string) => void;
}>;
