import { type ReactElement } from 'react'

import { type ARTICLE_ORIENTATION } from '@/05-entities/articles/model/article-orientation'

import { type Article } from '../../model/@types'

export type ArticleRenderOptions = {
  articleIndex: number
  page: string
  pageIndex: number
}

export type ArticlesProps = {
  data: {
    pageParams: string[]
    pages: Article[][]
  }
  orientation: ARTICLE_ORIENTATION
  renderItem?: (article: ReactElement, options: ArticleRenderOptions) => ReactElement
}
