import ArticlesSearch from '@/04-features/articles-search/ui/ArticlesSearch'
import Logo from '@/05-entities/app/ui/Logo'

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
