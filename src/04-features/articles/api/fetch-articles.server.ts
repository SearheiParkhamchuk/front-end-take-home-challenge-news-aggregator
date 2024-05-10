'use server'
import { NYTArticlesQueryCache } from '@/05-entities/articles/api/new-york-times/get-many/query-cache.server'
import { newsApiArticlesQueryCache } from '@/05-entities/articles/api/news-api/get-many/query-cache.server'
import { theGuardianArticlesQueryCache } from '@/05-entities/articles/api/the-guardian/get-many/query-cache.server'
import { getCacheInstance } from '@/06-shared/lib/third-party/cache/get-cache-instance'

import { mergeArticles } from '../lib/merge-articles'
import { mergeArticlesErrors } from '../lib/merge-articles-errors'

export async function fetchArticles(params: { page?: string, pageSize?: number, query?: string }) {
  const cache = getCacheInstance()

  const response = await Promise.all([
    newsApiArticlesQueryCache(cache, params),
    theGuardianArticlesQueryCache(cache, params),
    NYTArticlesQueryCache(cache, params)
  ])

  const articles = mergeArticles(response)
  const errors = mergeArticlesErrors(response)

  return { articles, errors, cache }
}
