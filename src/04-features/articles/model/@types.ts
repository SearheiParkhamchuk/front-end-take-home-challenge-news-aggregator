import { type ARTICLES_ORDER_BY } from '@/04-features/articles-sorting/model'
import { type SEARCH_PARAMS_KEYS } from '@/05-entities/app/model/search-params-keys'
import { type ApiResponse } from '@/06-shared/lib/utils/errors/types/ApiResponse'

export type Article = {
  description: string
  id: string
  publishedAt: Date
  source: { name: string, src: string }
  thumbnail: string | null
  title: string
}

export type ArticleSerialized = {
  description: string
  id: string
  publishedAt: string
  source: { name: string, src: string }
  thumbnail: string | null
  title: string
}

export type ArticleResponseQueryMany = ApiResponse<{
  data: Article[]
}>

export type ArticleSerializedResponseQueryMany = ApiResponse<{
  data: ArticleSerialized[]
}>

export type ArticlesQueryParams = {
  [SEARCH_PARAMS_KEYS.A_PAGE]: string
  [SEARCH_PARAMS_KEYS.A_PAGE_SIZE]?: string
  [SEARCH_PARAMS_KEYS.A_QUERY]?: string
  [SEARCH_PARAMS_KEYS.A_ORDER_BY]?: ARTICLES_ORDER_BY
}

export type ArticlesLocalQueryParams = {
  page?: number
  pageSize?: number
  query?: string
}
