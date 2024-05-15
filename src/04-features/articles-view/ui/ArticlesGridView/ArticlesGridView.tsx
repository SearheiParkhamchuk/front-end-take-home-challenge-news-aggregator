'use client'
import ArticlesGrid from '@/05-entities/articles/ui/ArticlesGrid'
import { withSuspense } from '@/06-shared/lib/utils/HOK/withSuspense'

import { type ArticlesGridViewProps } from './types'
import { useArticlesView } from '../../model/useArticlesView'

function ArticlesGridView({ children }: ArticlesGridViewProps) {
  const [view] = useArticlesView()

  return (
    <ArticlesGrid view={view}>
      {children({ view })}
    </ArticlesGrid>
  )
}

export default withSuspense(ArticlesGridView)
