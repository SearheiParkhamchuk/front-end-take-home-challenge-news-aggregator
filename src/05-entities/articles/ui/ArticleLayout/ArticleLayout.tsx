import Stack from 'src/06-shared/ui/Stack'

import styles from './styles.module.scss'
import { type ArticleLayoutProps } from './types'
import { ARTICLE_ORIENTATION } from '../../model/article-orientation'

const classnames = {
  [ARTICLE_ORIENTATION.VERTICAL]: {
    container: styles['container-vertical']
  },
  [ARTICLE_ORIENTATION.HORIZONTAL]: {
    container: styles['container-horizontal']
  }
}

function ArticleLayout({ Image, Content, Footer, orientation = ARTICLE_ORIENTATION.VERTICAL, ...rest }: ArticleLayoutProps) {
  return (
    <article {...rest} className={`${styles.container} ${classnames[orientation].container}`}>
      <div className={styles.image}>
        {Image}
      </div>
      <Stack className={styles.content}>
        <Stack className={styles.text}>
          {Content}
        </Stack>
        <div className={styles.divider}></div>
        <Stack className={styles.footer}>
          {Footer}
        </Stack>
      </Stack>
    </article>
  )
}

export default ArticleLayout
