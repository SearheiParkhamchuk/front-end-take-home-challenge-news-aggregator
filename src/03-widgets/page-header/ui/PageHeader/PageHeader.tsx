import Logo from '@/05-entities/app/ui/Logo'
import ArticlesSearch from '@/05-entities/articles/ui/ArticlesSearch'

import styles from './styles.module.scss'

function PageHeader() {
  return (
    <div className={styles.inner}>
      <Logo />
      <div className={styles['search-container']}>
        <ArticlesSearch />
      </div>
    </div>
  )
}

export default PageHeader
