import Divider from '@/06-shared/ui/Divider'
import Stack from '@/06-shared/ui/Stack'

import styles from './styles.module.scss'
import { type ArticleLayoutProps } from './types'

function ArticleLayout({ Image, Content, Footer }: ArticleLayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles['image-container']}>
        {Image}
      </div>
      <Stack gap='xs'>
        {Content}
        <Divider color='primary' />
        {Footer}
      </Stack>
    </div>
  )
}

export default ArticleLayout
