import Skeleton from '@/06-shared/ui/Skeleton'

import ArticleLayout from '../ArticleLayout'

function ArticleSkeleton() {
  return (
    <ArticleLayout
      Content={<>
        <Skeleton height={20} variant='rectangular' />
        <Skeleton height={20} variant='rectangular' width='90%' />
        <Skeleton height={10} variant='rectangular' width='70%' />
        <Skeleton height={10} variant='rectangular' width='90%' />
        <Skeleton height={10} variant='rectangular' width='70%' />
        <Skeleton height={10} variant='rectangular' width='90%' />
        <Skeleton height={10} variant='rectangular' width='50%' />
      </>}
      Footer={<>
        <Skeleton variant='rectangular' width='30%' />
        <Skeleton variant='rectangular' width='25%' />
      </>}
      Image={<Skeleton height={350} variant='rectangular' />}
    />
  )
}

export default ArticleSkeleton
