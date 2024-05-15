'use server'
import { allArticlesQueryCache } from '@/04-features/articles/api/news-sources/all-articles/client-api/query-cache.server'
import { type ArticlesQueryParams } from '@/04-features/articles/model/@types'

import { getCacheInstance } from '@/06-shared/lib/third-party/cache/get-cache-instance'

import { mergeArticlesErrors } from '../lib/merge-articles-errors'
import { prepareArticles } from '../model/prepare-articles'

export async function fetchArticles(params: ArticlesQueryParams) {
  const cache = getCacheInstance()
  const rawArticles = await allArticlesQueryCache(cache, params)
  const articles = prepareArticles(rawArticles)
  const errors = mergeArticlesErrors(rawArticles)
  return { articles, errors, cache }
}
