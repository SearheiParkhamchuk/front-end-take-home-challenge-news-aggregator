'use client'

import { useNYTArticlesQuery } from '@/05-entities/articles/api/new-york-times/get-many/query-cache.client'
import { useNewsApiArticlesQuery } from '@/05-entities/articles/api/news-api/get-many/query-cache.client'
import { useTheGuardianArticlesQuery } from '@/05-entities/articles/api/the-guardian/get-many/query-cache.client'

import { type ArticleResponseQueryMany, type ArticlesQueryParams } from '@/05-entities/articles/api/types/Article'

import { mergeArticles } from '../lib/merge-articles'
import { mergeArticlesErrors } from '../lib/merge-articles-errors'

export function useFetchArticles(params: ArticlesQueryParams) {
  const { data: nyt } = useNYTArticlesQuery(params)
  const { data: theGuardian } = useTheGuardianArticlesQuery(params)
  const { data: newsApi } = useNewsApiArticlesQuery(params)

  const responses: ArticleResponseQueryMany[] = []
  if (nyt) responses.push(nyt)
  if (theGuardian) responses.push(theGuardian)
  if (newsApi) responses.push(newsApi)

  const articles = mergeArticles(responses)
  const errors = mergeArticlesErrors(responses)

  return { articles, errors }
}
