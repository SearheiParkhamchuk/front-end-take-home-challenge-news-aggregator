import { ArticlesGridViewButton } from 'src/04-features/articles-change-view/index.ui'
import { ArticlesOrderBy } from 'src/04-features/articles-order-by/index.ui'
import { ArticlesPreferences } from 'src/04-features/articles-preferences/index.ui'
import { ArticlesSearch } from 'src/04-features/articles-search/index.ui'
import { NewsCategories } from 'src/04-features/news-categories/index.ui'
import Group from 'src/06-shared/ui/Group'

import styles from './styles.module.scss'

async function ArticlesTopPanel() {
  return (
    <section className={styles.section}>
      <Group>
        <ArticlesSearch />
      </Group>
      <Group className={styles['group-right']}>
        <ArticlesOrderBy />
        <ArticlesPreferences>
          <NewsCategories />
        </ArticlesPreferences>
        <ArticlesGridViewButton />
      </Group>
    </section>
  )
}

export default ArticlesTopPanel
