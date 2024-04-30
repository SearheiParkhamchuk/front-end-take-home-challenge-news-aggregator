import { type Article } from '../types/Article'

export type ArticleResponse = {
  data: { articles: Article[] }
  error: null
} | {
  data: null
  error: unknown
}

export type FetchOptions = {
  page?: string
  pageSize?: number
  query?: string
}

export abstract class ArticleStrategy {
  abstract fetch(options: FetchOptions): Promise<ArticleResponse>
}
