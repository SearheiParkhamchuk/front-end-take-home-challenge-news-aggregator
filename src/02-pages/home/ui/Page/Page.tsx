import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import ArticlesClient from 'src/03-widgets/articles/ui/ArticlesClient'
import ArticlesTopPanel from 'src/03-widgets/articles/ui/ArticlesTopPanel'

import { fetchArticlesInfinite } from 'src/04-features/articles/api/articles-infinite/fetch-articles-infinite.server'
import { getArticlesQueryParams } from 'src/04-features/articles/model/get-articles-query-params'

import { type PageProps } from './types'
import PageLayout from '../PageLayout'

async function HomePage({ searchParams }: PageProps) {
  const { cache } = await fetchArticlesInfinite(getArticlesQueryParams(searchParams))

  return (
    <HydrationBoundary state={dehydrate(cache)}>
      <PageLayout
        Content={<ArticlesClient />}
        TopPanel={<ArticlesTopPanel />}
      />
    </HydrationBoundary>
  )
}

export default HomePage
