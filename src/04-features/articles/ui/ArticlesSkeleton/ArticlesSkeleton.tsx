import ArticleSkeleton from '@/05-entities/articles/ui/ArticleSkeleton'
import ArticlesGrid from '@/05-entities/articles/ui/ArticlesGrid'

function ArticlesSkeleton() {
  return (
    <ArticlesGrid>
      <ArticleSkeleton />
      <ArticleSkeleton />
      <ArticleSkeleton />
      <ArticleSkeleton />
      <ArticleSkeleton />
      <ArticleSkeleton />
      <ArticleSkeleton />
    </ArticlesGrid>
  )
}

export default ArticlesSkeleton
