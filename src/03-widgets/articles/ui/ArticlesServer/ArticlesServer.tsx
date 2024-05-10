'use server'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { fetchArticles } from '@/04-features/articles/api/fetch-articles.server'
import { getArticlesQueryParams } from '@/04-features/articles/lib/get-articles-query-params'
import Articles from '@/04-features/articles/ui/Articles'
import Alert from '@/06-shared/ui/Alert'

import { type ArticlesServerProps } from './types'

async function ArticlesServer({ page, query }: ArticlesServerProps) {
  const { errors, cache } = await fetchArticles(getArticlesQueryParams({ page, query }))

  return (
    <HydrationBoundary state={dehydrate(cache)}>
      {!!errors.length && errors.map((e, index) => <Alert closable key={index} variant='error'>{e.message}</Alert>)}
      <Articles />
    </HydrationBoundary>
  )
}

export default ArticlesServer
