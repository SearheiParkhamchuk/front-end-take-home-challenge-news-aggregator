import Link from 'src/06-shared/ui/Link'

import { type LoadMoreButtonProps } from './types'

function ButtonLoadMore({ href, children, loading, onClick }: LoadMoreButtonProps) {
  return (
    <Link
      component='button'
      decoration='none'
      href={href}
      loading={loading}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default ButtonLoadMore
