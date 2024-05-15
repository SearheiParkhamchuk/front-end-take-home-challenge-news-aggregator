import ArticlesSelectOrderBy from '@/04-features/articles-sorting/ui/ArticlesSelectOrderBy'
import ArticlesGridViewButton from '@/04-features/articles-view/ui/ArticlesGridViewButton'
import Group from '@/06-shared/ui/Group'

import styles from './styles.module.scss'

function ArticlesTopPanel() {
  return (
    <section className={styles.section}>
      <Group>
        <ArticlesSelectOrderBy />
      </Group>
      <Group>
        <ArticlesGridViewButton />
      </Group>
    </section>
  )
}

export default ArticlesTopPanel
