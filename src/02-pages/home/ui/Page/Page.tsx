import { Suspense } from 'react'

import ArticlesServer from '@/03-widgets/articles/ui/ArticlesServer'
import ArticlesSkeleton from '@/04-features/articles/ui/ArticlesSkeleton'

import PageLayout from '../PageLayout'

function HomePage({ page, query }: { page: string | undefined, query: string | undefined }) {
  return (
    <PageLayout
      Content={
        <Suspense fallback={<ArticlesSkeleton />}>
          <ArticlesServer page={page} query={query} />
        </Suspense>
      }
      TopPanel={<></>}
    />
  )
}

export default HomePage
