import { type SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import { type ISOString } from '@/06-shared/lib/types/ISOString'

export type QuerySuccess = {
  response: {
    currentPage: number
    orderBy: 'relevance'
    pageSize: number
    pages: number
    results: Array<{
      apiUrl: string
      fields: {
        thumbnail: string | null
        trailText: string
      }
      id: string
      isHosted: boolean
      pillarId: string
      pillarName: string
      sectionId: string
      sectionName: string
      type: 'article'
      webPublicationDate: ISOString
      webTitle: string
      webUrl: string
    }>
    startIndex: number
    status: 'ok'
    total: number
    userTier: 'developer'
  }
}

export type QueryError = {
  response: {
    message: string
    status: 'error'
  }
}

export type QueryParams = {
  [SEARCH_PARAMS_KEYS.A_PAGE]?: string
  pageSize?: number
  [SEARCH_PARAMS_KEYS.A_QUERY]?: string
}
