import { type SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import { type ApiResponse } from '@/06-shared/lib/utils/errors/types/ApiResponse'

export type Article = {
  description: string
  publishedAt: Date
  source: { name: string, src: string }
  thumbnail: string | null
  title: string
}

export type ArticleResponseQueryMany = ApiResponse<{
  data: Article[]
}>

export type ArticlesQueryParams = {
  [SEARCH_PARAMS_KEYS.A_PAGE]: string | undefined
  pageSize: number | undefined
  [SEARCH_PARAMS_KEYS.A_QUERY]: string | undefined
}
