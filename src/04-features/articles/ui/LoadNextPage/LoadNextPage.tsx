import { type MouseEvent } from 'react'

import { SEARCH_PARAMS_KEYS } from 'src/05-entities/app/model/search-params-keys'
import LoadMoreButton from 'src/05-entities/articles/ui/LoadMoreButton'
import { useSearchParams } from 'src/06-shared/lib/third-party/router/useSearchParams'

import { withSuspense } from 'src/06-shared/lib/utils/HOK/withSuspense'

import { useFetchArticlesInfinite } from '../../api/articles-infinite/fetch-articles-infinite.client'
import { useArticlesSearchParams } from '../../model/useArticlesSearchParams'

function LoadNextPage({ ...rest }) {
  const [, { getFullPath }] = useSearchParams()
  const [searchParams] = useArticlesSearchParams()
  const inifinite = useFetchArticlesInfinite(searchParams)

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    inifinite.fetchNextPage()
  }

  return (
    <LoadMoreButton
      {...rest}
      href={getFullPath({ [SEARCH_PARAMS_KEYS.A_PAGE]: inifinite.nextPage.toString() })}
      loading={inifinite.isFetchingNextPage}
      loadMore={inifinite.hasNextPage}
      onClick={handleClick}
    />
  )
}

export default withSuspense(LoadNextPage)
