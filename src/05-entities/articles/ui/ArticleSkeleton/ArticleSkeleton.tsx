import Skeleton from '@/06-shared/ui/Skeleton'

import ArticleLayout from '../ArticleLayout'
import { type ARTICLE_ORIENTATION } from '../ArticleLayout/types'

function ArticleSkeleton({ orientation }: { orientation?: ARTICLE_ORIENTATION }) {
  return (
    <ArticleLayout
      Content={
        <>
          <Skeleton height={10} />
          <Skeleton height={10} width='90%' />
          <Skeleton height={5} width='70%' />
          <Skeleton height={5} width='90%' />
          <Skeleton height={5} width='70%' />
        </>
      }
      Footer={
        <>
          <Skeleton width='30%' />
          <Skeleton width='25%' />
        </>
      }
      Image={<Skeleton height={250} />}
      orientation={orientation}
    />
  )
}

export default ArticleSkeleton
