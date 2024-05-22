import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/model/search-params-keys'
import LoadMoreButton from '@/05-entities/articles/ui/LoadMoreButton'
import { useSearchParams } from '@/06-shared/lib/third-party/router/useSearchParams'

import { useFetchArticlesInfinite } from '../../api/articles-infinite/fetch-articles-infinite.client'
import { useArticlesSearchParams } from '../../model/useArticlesSearchParams'

function LoadNextPage({ ...rest }) {
  const [, { getFullPath }] = useSearchParams()
  const [searchParams] = useArticlesSearchParams()
  const inifinite = useFetchArticlesInfinite(searchParams)

  const handleClick = () => {
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

export default LoadNextPage
