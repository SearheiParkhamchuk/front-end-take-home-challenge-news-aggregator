import { type ReactElement } from 'react'

import { type ARTICLE_ORIENTATION } from '../../model/article-orientation'

export type ArticleLayoutProps = {
  Content: ReactElement
  Footer: ReactElement
  Image: ReactElement
  orientation?: ARTICLE_ORIENTATION
}
