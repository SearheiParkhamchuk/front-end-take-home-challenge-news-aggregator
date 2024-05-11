'use client'
import { useQueries } from '@tanstack/react-query'

import { queryOptionsNyt } from '@/05-entities/articles/api/new-york-times/get-many/query-cache.client'

import { queryOptionsNewApi } from '@/05-entities/articles/api/news-api/get-many/query-cache.client'
import { queryOptionsTheGuardian } from '@/05-entities/articles/api/the-guardian/get-many/query-cache.client'
import { type ArticleResponseQueryMany, type ArticlesQueryParams } from '@/05-entities/articles/api/types/Article'

import { mergeArticles } from '../lib/merge-articles'
import { mergeArticlesErrors } from '../lib/merge-articles-errors'

const newsSourceQueries = [queryOptionsNyt, queryOptionsTheGuardian, queryOptionsNewApi]

export function useFetchArticles(params: ArticlesQueryParams) {
  const rawResponse = useQueries({ queries: newsSourceQueries.map(query => query(params)) })

  const responseData = rawResponse.map(d => d.data).filter((d): d is ArticleResponseQueryMany => !!d)
  const isFetching = rawResponse.some(d => d.isFetching)
  const articles = mergeArticles(responseData)
  const errors = mergeArticlesErrors(responseData)

  return { articles, errors, isFetching }
}
