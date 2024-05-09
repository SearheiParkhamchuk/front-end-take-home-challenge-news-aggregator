import { type ARTICLE_ORIENTATION } from '../ArticleLayout/types'

export type ArticleProps = {
  alt: string
  description: string
  publishedAt: Date
  source: { name: string, src: string }
  src: string | null
  title: string
  orientation?: ARTICLE_ORIENTATION
}
