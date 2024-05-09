import Divider from '@/06-shared/ui/Divider'
import Stack from '@/06-shared/ui/Stack'

import styles from './styles.module.scss'
import { ARTICLE_ORIENTATION, type ArticleLayoutProps } from './types'

const classnames = {
  [ARTICLE_ORIENTATION.VERTICAL]: {
    container: styles['container-vertical'],
    image: styles['image-vertical'],
    content: '',
    footer: ''
  },
  [ARTICLE_ORIENTATION.HORIZONTAL]: {
    container: styles['container-horizontal'],
    image: styles['image-horizontal'],
    content: styles['content-horizontal'],
    footer: styles['footer-horizontal']
  }
}

function ArticleLayout({ Image, Content, Footer, orientation = ARTICLE_ORIENTATION.VERTICAL }: ArticleLayoutProps) {
  return (
    <article className={`${styles.container} ${classnames[orientation].container}`}>
      <div className={`${styles.image} ${classnames[orientation].image}`}>
        {Image}
      </div>
      <Stack className={`${styles.content} ${classnames[orientation].content}`}>
        <Stack className={styles.text}>
          {Content}
        </Stack>
        <Divider
          color='primary'
          orientation={orientation === ARTICLE_ORIENTATION.HORIZONTAL ? 'vertical' : 'horizontal'}
        />
        <Stack className={classnames[orientation].footer}>
          {Footer}
        </Stack>
      </Stack>
    </article>
  )
}

export default ArticleLayout
