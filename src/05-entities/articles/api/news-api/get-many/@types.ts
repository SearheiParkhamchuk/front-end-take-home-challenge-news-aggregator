import { type SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import { type ISOString } from '@/06-shared/lib/types/ISOString'

export type QuerySuccess = {
  articles: Array<{
    author: string
    content: string
    description: string
    publishedAt: ISOString
    source: { id: null, name: string }
    title: string
    url: string
    urlToImage: string
  }>
  status: 'ok'
  totalResults: number
}

export type QueryError = {
  code: string
  message: string
  status: 'error'
}

export type QueryParams = {
  [SEARCH_PARAMS_KEYS.A_PAGE]?: string
  pageSize?: number
  [SEARCH_PARAMS_KEYS.A_QUERY]?: string
}
