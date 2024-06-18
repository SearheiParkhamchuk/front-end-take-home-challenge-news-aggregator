'use client'

import { withSuspense } from 'src/06-shared/lib/utils/HOK/withSuspense'
import { GRID_VIEW } from 'src/06-shared/ui/GridViewButton/model'

import { type ArticlesGridSkeletonProps } from './types'
import { ARTICLE_ORIENTATION } from '../../constants/article-orientation'
import ArticleSkeleton from '../ArticleSkeleton'
import ArticlesGrid from '../ArticlesGrid'

function ArticlesGridSkeleton({ view }: ArticlesGridSkeletonProps) {

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

export default withSuspense(ArticlesGridSkeleton)
