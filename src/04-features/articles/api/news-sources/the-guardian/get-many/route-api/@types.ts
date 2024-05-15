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
