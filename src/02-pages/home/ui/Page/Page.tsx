import ArticlesServer from '@/03-widgets/articles/ui/ArticlesServer'
import ArticlesPagination from '@/05-entities/articles/ui/ArticlesPagination'

import PageLayout from '../PageLayout'

function HomePage({ page }: { page: string | undefined }) {
  return (
    <PageLayout
      BottomPanel={<ArticlesPagination page={page} />}
      Content={<ArticlesServer page={page} />}
      TopPanel={<ArticlesPagination page={page} />}
    />
  )
}

export default HomePage
