import { useMemo } from 'react'

import { useSearchParams } from '@/06-shared/lib/third-party/router/useSearchParams'

import { type ArticlesQueryParams } from './@types'
import { getArticlesQueryParams } from './get-articles-query-params'

type ArticlesQueryParamsString = { [key in keyof ArticlesQueryParams]?: string }

export function useArticlesSearchParams() {
  const [searchParams, { set }] = useSearchParams<ArticlesQueryParamsString>()

  const params = useMemo(() => getArticlesQueryParams(searchParams), [searchParams])

  return [params, { set }] as const
}
