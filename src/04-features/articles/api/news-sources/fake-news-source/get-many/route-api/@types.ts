import { type ISOString } from '@/06-shared/lib/types/ISOString'

export type QuerySuccess = {
  results: Array<{
    description: string
    publishedAt: ISOString
    source: { name: string, src: string }
    thumbnail: string | null
    title: string
  }>
}

export type QueryError = {
  message: string
  status: 'error'
}
