import { ARTICLES_SEARCH_PARAMS_KEYS } from 'src/05-entities/articles'
import { useSearchParams } from 'src/06-shared/lib/third-party/router/useSearchParams'

import ButtonLoadPreviousPage from 'src/06-shared/ui/ButtonLoadPreviousPage'

import { useGetArticlesInfinite } from '../../api/useGetArticlesInfinite'

function ArticleLoadPreviousPage() {
  const [, { getFullPath }] = useSearchParams()
  const infinite = useGetArticlesInfinite()

  return (
    <ButtonLoadPreviousPage
      hasPrevious={infinite.hasPreviousPage}
      href={getFullPath({ [ARTICLES_SEARCH_PARAMS_KEYS.A_PAGE]: infinite.previousPage.toString() })}
      loading={infinite.isFetchingPreviousPage}
      onLoad={infinite.fetchPreviousPage}
    />
  )
}

export default ArticleLoadPreviousPage