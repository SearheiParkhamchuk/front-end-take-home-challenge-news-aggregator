import ArticlesGridViewButton from '@/04-features/articles/ui/ArticlesGridViewButton'
import Group from '@/06-shared/ui/Group'

import styles from './styles.module.scss'

function ArticlesTopPanel() {
  return (
    <section className={styles.section}>
      <Group>
      </Group>
      <Group>
        <ArticlesGridViewButton />
      </Group>
    </section>
  )
}

export default ArticlesTopPanel
