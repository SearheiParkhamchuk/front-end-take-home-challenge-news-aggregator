'use client'
import { useArticlesView } from '@/05-entities/articles/lib/useArticlesView'
import GridViewButton from '@/06-shared/ui/GridViewButton'
import Group from '@/06-shared/ui/Group'

import styles from './styles.module.scss'

function ArticlesTopPanel() {
  const [view, setView] = useArticlesView()

  return (
    <section className={styles.section}>
      <Group>
      </Group>
      <Group>
        <GridViewButton value={view} onChange={setView} />
      </Group>
    </section>
  )
}

export default ArticlesTopPanel
