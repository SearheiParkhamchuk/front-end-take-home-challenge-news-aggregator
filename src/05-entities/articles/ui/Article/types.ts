import { type ARTICLE_ORIENTATION } from '../../model/article-orientation'

export type ArticleProps = {
  alt: string
  description: string
  poster: string | null
  publishedAt: Date
  source: { name: string, src: string }
  title: string
  orientation?: ARTICLE_ORIENTATION
}
