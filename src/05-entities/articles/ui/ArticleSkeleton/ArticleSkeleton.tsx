import Skeleton from 'src/06-shared/ui/Skeleton'

import { type ARTICLE_ORIENTATION } from '../../model/article-orientation'
import ArticleLayout from '../ArticleLayout'

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
      Image={<Skeleton height={200} />}
      orientation={orientation}
    />
  )
}

export default ArticleSkeleton
