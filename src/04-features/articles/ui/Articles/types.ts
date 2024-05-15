import { type ReactElement } from 'react'

import { type ARTICLE_ORIENTATION } from '@/05-entities/articles/model/article-orientation'

export type ArticleRenderOptions = {
  articleIndex: number
  page: string
  pageIndex: number
}

export type ArticlesProps = {
  orientation: ARTICLE_ORIENTATION
  renderItem?: (article: ReactElement, options: ArticleRenderOptions) => ReactElement
}
