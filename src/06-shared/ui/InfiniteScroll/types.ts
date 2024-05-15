import { type ReactElement } from 'react'

export type InfiniteScrollProps = {
  children: (props: { page: (page: string) => Record<string, string> },) => ReactElement
  onLastPage: () => void
  onPage: (page: string) => void
  reobserveOnChange: unknown
}
