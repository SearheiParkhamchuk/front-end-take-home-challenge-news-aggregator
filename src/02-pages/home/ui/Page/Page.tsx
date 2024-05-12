import ArticlesServer from '@/03-widgets/articles/ui/ArticlesServer'
import ArticlesTopPanel from '@/03-widgets/articles/ui/ArticlesTopPanel'

import { type PageProps } from './types'
import PageLayout from '../PageLayout'

function HomePage({ searchParams }: PageProps) {
  return (
    <PageLayout
      Content={<ArticlesServer searchParams={searchParams} />}
      TopPanel={<ArticlesTopPanel />}
    />
  )
}

export default HomePage
