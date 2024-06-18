import { type MouseEvent } from 'react'

import { articlesClientApi } from 'src/05-entities/articles/index.client'
import LoadMoreButton from 'src/05-entities/articles/ui/LoadMoreButton'

import { type LoadNextPageProps } from './types'

function LoadNextPage({ params, href }: LoadNextPageProps) {
  const inifinite = articlesClientApi.useGetArticlesInfinite(params)

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    inifinite.fetchNextPage()
  }

  return (
    <LoadMoreButton
      href={href}
      loading={inifinite.isFetchingNextPage}
      loadMore={inifinite.hasNextPage}
      onClick={handleClick}
    />
  )
}

export default LoadNextPage
