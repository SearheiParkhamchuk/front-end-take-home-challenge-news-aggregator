import { Suspense } from 'react'

import ArticlesServer from '@/03-widgets/articles/ui/ArticlesServer'
import ArticlesTopPanel from '@/03-widgets/articles/ui/ArticlesTopPanel'
import ArticlesSkeleton from '@/04-features/articles/ui/ArticlesSkeleton'

import { type PageProps } from './types'
import PageLayout from '../PageLayout'

function HomePage({ page, query }: PageProps) {
  return (
    <PageLayout
      Content={
        <Suspense fallback={<ArticlesSkeleton />}>
          <ArticlesServer page={page} query={query} />
        </Suspense>
      }
      TopPanel={<ArticlesTopPanel />}
    />
  )
}

export default HomePage
