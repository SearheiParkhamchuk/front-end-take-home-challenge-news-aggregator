'use client'
import { type ArticlesQueryParams } from '@/05-entities/articles/api/@types'
import { useAllArticles } from '@/05-entities/articles/api/all-articles/client-api/query-cache.client'
import { EMPTY_ARRAY } from '@/06-shared/lib/constants/empty-array'

import { mergeArticlesErrors } from '../../../05-entities/articles/lib/merge-articles-errors'
import { prepareArticles } from '../lib/prepare-articles'

export function useFetchArticles(params: ArticlesQueryParams) {
  const { data: rawArticles = EMPTY_ARRAY, isFetching } = useAllArticles(params)
  const articles = prepareArticles(rawArticles)
  const errors = mergeArticlesErrors(rawArticles)
  return { articles, errors, isFetching }
}
