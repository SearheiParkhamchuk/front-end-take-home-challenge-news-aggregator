import { type ReactElement } from 'react'

export enum ARTICLE_ORIENTATION {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal'
}

export type ArticleLayoutProps = {
  Content: ReactElement
  Footer: ReactElement
  Image: ReactElement
  orientation?: ARTICLE_ORIENTATION
}
