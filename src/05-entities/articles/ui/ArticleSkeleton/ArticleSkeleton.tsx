import Skeleton from '@/06-shared/ui/Skeleton'

import ArticleLayout from '../ArticleLayout'

function ArticleSkeleton() {
  return (
    <ArticleLayout
      Content={
        <>
          <Skeleton height={10} />
          <Skeleton height={10} width='90%' />
          <Skeleton height={5} width='70%' />
          <Skeleton height={5} width='90%' />
          <Skeleton height={5} width='70%' />
          <Skeleton height={5} width='90%' />
          <Skeleton height={5} width='50%' />
        </>
      }
      Footer={
        <>
          <Skeleton width='30%' />
          <Skeleton width='25%' />
        </>
      }
      Image={<Skeleton height={350} />}
    />
  )
}

export default ArticleSkeleton
