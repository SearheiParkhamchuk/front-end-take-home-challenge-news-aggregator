import ArticleSkeleton from '@/05-entities/articles/ui/ArticleSkeleton'
import ArticlesGrid from '@/05-entities/articles/ui/ArticlesGrid'
import Skeleton from '@/06-shared/ui/Skeleton'
import Stack from '@/06-shared/ui/Stack'

import PageLayout from '../PageLayout'

function HomePageSkeleton() {
  return (
    <PageLayout
      BottomPanel={<Stack direction='row'><Skeleton height={30} width={300} /></Stack>}
      Content={
        <ArticlesGrid>
          <ArticleSkeleton />
          <ArticleSkeleton />
          <ArticleSkeleton />
          <ArticleSkeleton />
          <ArticleSkeleton />
          <ArticleSkeleton />
          <ArticleSkeleton />
        </ArticlesGrid>
      }
      TopPanel={<Stack direction='row'><Skeleton height={30} width={300} /></Stack>}
    />
  )
}

export default HomePageSkeleton
