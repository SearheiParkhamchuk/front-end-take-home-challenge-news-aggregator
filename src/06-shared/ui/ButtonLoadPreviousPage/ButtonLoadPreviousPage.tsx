import { type MouseEvent } from 'react'

import ButtonLoadMore from 'src/06-shared/ui/ButtonLoadMore'

import { type LoadPreviousPageProps } from './types'

function ButtonLoadPreviousPage({ loading, hasPrevious, href, onLoad }: LoadPreviousPageProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onLoad()
  }

  if (!hasPrevious) return null

  return (
    <ButtonLoadMore
      href={href}
      loading={loading}
      onClick={handleClick}
    >
      Load previous
    </ButtonLoadMore>
  )
}

export default ButtonLoadPreviousPage
