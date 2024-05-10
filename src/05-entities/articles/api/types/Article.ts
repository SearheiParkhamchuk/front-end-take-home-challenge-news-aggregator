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

export type ArticlesQueryParams = { page: string | undefined, pageSize: number | undefined, query: string | undefined }
