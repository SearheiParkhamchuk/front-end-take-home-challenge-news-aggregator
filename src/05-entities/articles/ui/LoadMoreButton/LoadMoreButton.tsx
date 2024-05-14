import Link from '@/06-shared/ui/Link'

import Text from '@/06-shared/ui/Text'

import { type LoadMoreButtonProps } from './types'

function LoadMoreButton({ href, loading, loadMore, onClick, ...rest }: LoadMoreButtonProps) {
  return loadMore
    ? (
      <Link
        {...rest}
        shallow
        component='button'
        href={href}
        loading={loading}
        onClick={async (event) => {
          event.preventDefault()
          onClick()
        }}
      >
        Load more
      </Link>)
    : <Text color='primary'>That&apos;s all for now</Text>
}

export default LoadMoreButton
