'use client'

import { useCallback, useEffect } from 'react'

import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import NotFound from '@/05-entities/app/ui/NotFound'
import { useArticlesSearchParams } from '@/05-entities/articles/lib/useArticlesSearchParams'
import { useArticlesView } from '@/05-entities/articles/lib/useArticlesView'
import Article from '@/05-entities/articles/ui/Article'
import { ARTICLE_ORIENTATION } from '@/05-entities/articles/ui/ArticleLayout/types'
import ArticlesGrid from '@/05-entities/articles/ui/ArticlesGrid'
import LoadMoreButton from '@/05-entities/articles/ui/LoadMoreButton'
import { useSearchParams } from '@/06-shared/lib/third-party/router/useSearchParams'
import { withSuspense } from '@/06-shared/lib/utils/HOK/withSuspense'
import { GRID_VIEW } from '@/06-shared/ui/GridViewButton/model'
import Stack from '@/06-shared/ui/Stack'

import { useFetchArticlesInfinite } from '../../api/fetch-articles-infinite.client'
import { useArticlesObserver } from '../../lib/hooks/useArticlesObserver'
import { useClearArticlesCache } from '../../lib/hooks/useClearArticlesCache'
import { prepareArticles } from '../../lib/prepare-articles'
import ArticlesSkeleton from '../ArticlesSkeleton'

function Articles() {
  const [view] = useArticlesView()
  const [, { getFullPath }] = useSearchParams()
  const [searchParams, { set }] = useArticlesSearchParams()
  const onPageNumberIntersection = useCallback((page: string) => { set({ [SEARCH_PARAMS_KEYS.A_PAGE]: page }) }, [set])

  const inifinite = useFetchArticlesInfinite(searchParams)
  const observer = useArticlesObserver({ onPageLastIntersection: inifinite.fetchNextPage, onPageNumberIntersection })

  const { refreshObserveElements } = observer
  useEffect(refreshObserveElements, [refreshObserveElements, inifinite.data])
  useClearArticlesCache()

  const articles = inifinite.data.pages.map(prepareArticles)
  const noArticlesFound = articles.flat().length === 0

  if (inifinite.isLoading) return <ArticlesSkeleton />
  if (noArticlesFound || !inifinite.data) return <NotFound title='No articles found' />

  return (
    <Stack>
      <ArticlesGrid view={view}>
        {articles?.map((a, pageIndex) => a.map((article, articleIndex) => (
          <Article
            {...(articleIndex === 0 && observer.pageNumberIndicator(inifinite.data.pageParams[pageIndex]))}
            alt={article.title}
            description={article.description}
            key={`${pageIndex}-${articleIndex}`}
            orientation={view === GRID_VIEW.GRID ? ARTICLE_ORIENTATION.VERTICAL : ARTICLE_ORIENTATION.HORIZONTAL}
            publishedAt={article.publishedAt}
            source={article.source}
            src={article.thumbnail}
            title={article.title}
          />
        )))}
      </ArticlesGrid>
      <Stack align='center'>
        <LoadMoreButton
          {...observer.pageLastIndicator()}
          href={getFullPath({ [SEARCH_PARAMS_KEYS.A_PAGE]: inifinite.nextPage.toString() })}
          loading={inifinite.isFetching}
          loadMore={inifinite.hasNextPage}
          onClick={inifinite.fetchNextPage}
        />
      </Stack>
    </Stack>
  )
}

export default withSuspense(Articles)
