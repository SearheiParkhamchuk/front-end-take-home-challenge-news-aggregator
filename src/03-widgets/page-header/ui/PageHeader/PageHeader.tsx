import { Suspense } from 'react'

import Logo from '@/05-entities/app/ui/Logo'
import ArticlesSearch from '@/05-entities/articles/ui/ArticlesSearch'

import styles from './styles.module.scss'

function PageHeader({ ...rest }: {}) {
  return (
    <div {...rest} className={styles.inner}>
      <Logo />
      <Suspense>
        <div className={styles['search-container']}><ArticlesSearch /></div>
      </Suspense>
    </div>
  )
}

export default PageHeader
