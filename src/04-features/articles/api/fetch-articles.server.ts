'use server'
import { type ArticlesQueryParams } from '@/05-entities/articles/api/@types'

import { allArticlesQueryCache } from '@/05-entities/articles/api/all-articles/client-api/query-cache.server'
import { getCacheInstance } from '@/06-shared/lib/third-party/cache/get-cache-instance'

import { mergeArticlesErrors } from '../../../05-entities/articles/lib/merge-articles-errors'
import { prepareArticles } from '../lib/prepare-articles'

export async function fetchArticles(params: ArticlesQueryParams) {
  const cache = getCacheInstance()
  const rawArticles = await allArticlesQueryCache(cache, params)
  const articles = prepareArticles(rawArticles)
  const errors = mergeArticlesErrors(rawArticles)
  return { articles, errors, cache }
}
