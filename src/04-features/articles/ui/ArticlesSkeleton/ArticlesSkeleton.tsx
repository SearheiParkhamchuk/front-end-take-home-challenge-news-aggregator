'use client'
import { useArticlesView } from '@/05-entities/articles/lib/useArticlesView'
import { ARTICLE_ORIENTATION } from '@/05-entities/articles/ui/ArticleLayout/types'
import ArticleSkeleton from '@/05-entities/articles/ui/ArticleSkeleton'
import ArticlesGrid from '@/05-entities/articles/ui/ArticlesGrid'
import { withSuspense } from '@/06-shared/lib/utils/HOK/withSuspense'
import { GRID_VIEW } from '@/06-shared/ui/GridViewButton/model'

function ArticlesSkeleton() {
  const [view] = useArticlesView()

  return (
    <ArticlesGrid view={view}>
      {new Array(9).fill(null).map((_, index) => (
        <ArticleSkeleton
          key={index}
          orientation={view === GRID_VIEW.GRID ? ARTICLE_ORIENTATION.VERTICAL : ARTICLE_ORIENTATION.HORIZONTAL}
        />
      ))}
    </ArticlesGrid>
  )
}

export default withSuspense(ArticlesSkeleton)
