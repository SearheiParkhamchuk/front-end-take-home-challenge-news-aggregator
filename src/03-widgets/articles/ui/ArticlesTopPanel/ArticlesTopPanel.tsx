import ArticlesSearch from '@/04-features/articles-search/ui/ArticlesSearch'
import ArticlesSelectOrderBy from '@/04-features/articles-sorting/ui/ArticlesSelectOrderBy'
import ArticlesGridViewButton from '@/04-features/articles-view/ui/ArticlesGridViewButton'
import Group from '@/06-shared/ui/Group'

import styles from './styles.module.scss'

function ArticlesTopPanel() {
  return (
    <section className={styles.section}>
      <Group>
        <ArticlesSearch />
      </Group>
      <Group className={styles['group-right']}>
        <ArticlesSelectOrderBy />
        <ArticlesGridViewButton />
      </Group>
    </section>
  )
}

export default ArticlesTopPanel
