import { ARTICLES_SEARCH_PARAMS_KEYS } from 'src/05-entities/articles'
import { useSearchParams } from 'src/06-shared/lib/third-party/router/useSearchParams'
import ButtonLoadNextPage from 'src/06-shared/ui/ButtonLoadNextPage'

import { useGetArticlesInfinite } from '../../api/useGetArticlesInfinite'

function ArticleLoadNextPage() {
  const [, { getFullPath }] = useSearchParams()
  const infinite = useGetArticlesInfinite()

  return (
    <ButtonLoadNextPage
      hasNext={infinite.hasNextPage}
      href={getFullPath({ [ARTICLES_SEARCH_PARAMS_KEYS.A_PAGE]: infinite.nextPage.toString() })}
      loading={infinite.isFetchingNextPage}
      onLoad={infinite.fetchNextPage}
    />
  )
}

export default ArticleLoadNextPage