'use server'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { fetchArticlesInfinite } from '@/04-features/articles/api/fetch-articles-infinite.server'
import { getArticlesQueryParams } from '@/04-features/articles/model/get-articles-query-params'
import ArticlesGridViewSkeleton from '@/04-features/articles-view/ui/ArticlesGridViewSkeleton'
import { withSuspense } from '@/06-shared/lib/utils/HOK/withSuspense'
import Alert from '@/06-shared/ui/Alert'

import { type ArticlesServerProps } from './types'
import ArticlesClient from '../ArticlesClient'

async function ArticlesServer({ searchParams }: ArticlesServerProps) {
  const { cache, errors } = await fetchArticlesInfinite(getArticlesQueryParams(searchParams))

  return (
    <HydrationBoundary state={dehydrate(cache)}>
      {!!errors.length && errors.map((e, index) => <Alert closable key={index} variant='error'>{e.message}</Alert>)}
      <ArticlesClient />
    </HydrationBoundary>
  )
}

export default withSuspense(ArticlesServer, { fallback: <ArticlesGridViewSkeleton /> })
