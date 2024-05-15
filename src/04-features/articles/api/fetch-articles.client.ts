'use client'
import { useAllArticles } from '@/04-features/articles/api/news-sources/all-articles/client-api/query-cache.client'
import { type ArticlesQueryParams } from '@/04-features/articles/model/@types'
import { EMPTY_ARRAY } from '@/06-shared/lib/constants/empty-array'

import { mergeArticlesErrors } from '../lib/merge-articles-errors'
import { prepareArticles } from '../model/prepare-articles'

export function useFetchArticles(params: ArticlesQueryParams) {
  const { data: rawArticles = EMPTY_ARRAY, isFetching } = useAllArticles(params)
  const articles = prepareArticles(rawArticles)
  const errors = mergeArticlesErrors(rawArticles)
  return { articles, errors, isFetching }
}
