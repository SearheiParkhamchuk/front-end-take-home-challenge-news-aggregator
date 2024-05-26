import { type ARTICLES_ORDER_BY } from '@/04-features/articles-sorting/model'
import { type SEARCH_PARAMS_KEYS } from '@/05-entities/app/model/search-params-keys'
import { type ApiResponse } from '@/06-shared/lib/utils/errors/types/ApiResponse'

type ArticleMedia = {
  height: string
  url: string
  width: string
}

export type Article = {
  media: {
    images: ArticleMedia[]
  }
  published_at: Date
  source_name: string
  source_url: string
  title: string
  uuid: string
  description?: string
  id?: string
  thumbnail?: string
}

export type ArticleServer = {
  media: {
    images: ArticleMedia[]
  }
  published_at: Date
  source_name: string
  source_url: string
  title: string
  uuid: string
  description?: string
  id?: string
  thumbnail?: string
}

export type ArticlesResponse = ApiResponse<ArticleServer[]>

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
