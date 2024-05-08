import { type ApiResponse } from '@/05-entities/app/lib/types/ApiResponse'

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
