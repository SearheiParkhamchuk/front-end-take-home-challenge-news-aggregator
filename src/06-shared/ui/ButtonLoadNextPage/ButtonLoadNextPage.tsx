import { type MouseEvent } from 'react'

import ButtonLoadMore from 'src/06-shared/ui/ButtonLoadMore'

import Text from 'src/06-shared/ui/Text'

import { type LoadNextPageProps } from './types'

function LoadNextPage({ onLoad, loading, hasNext, href }: LoadNextPageProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onLoad()
  }

  if (!hasNext) return <Text color='primary'>That&apos;s all for now</Text>

  return (
    <ButtonLoadMore
      href={href}
      loading={loading}
      onClick={handleClick}
    >
      Load next
    </ButtonLoadMore>
  )
}

export default LoadNextPage
