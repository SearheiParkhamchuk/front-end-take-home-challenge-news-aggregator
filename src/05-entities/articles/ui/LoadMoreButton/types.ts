import { type MouseEventHandler } from 'react'

export type LoadMoreButtonProps = {
  href: string
  loadMore: boolean
  onClick: MouseEventHandler<HTMLAnchorElement>
  loading?: boolean
}
