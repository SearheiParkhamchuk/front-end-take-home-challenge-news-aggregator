'use server'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { fetchArticlesInfinite } from '@/04-features/articles/api/fetch-articles-infinite.server'
import Articles from '@/04-features/articles/ui/Articles'
import ArticlesSkeleton from '@/04-features/articles/ui/ArticlesSkeleton'
import { getArticlesQueryParams } from '@/05-entities/articles/lib/get-articles-query-params'
import { withSuspense } from '@/06-shared/lib/utils/HOK/withSuspense'
import Alert from '@/06-shared/ui/Alert'

import { type ArticlesServerProps } from './types'

async function ArticlesServer({ searchParams }: ArticlesServerProps) {
  const { cache, errors } = await fetchArticlesInfinite(getArticlesQueryParams(searchParams))

  return (
    <HydrationBoundary state={dehydrate(cache)}>
      {!!errors.length && errors.map((e, index) => <Alert closable key={index} variant='error'>{e.message}</Alert>)}
      <Articles />
    </HydrationBoundary>
  )
}

export default withSuspense(ArticlesServer, { fallback: <ArticlesSkeleton /> })
