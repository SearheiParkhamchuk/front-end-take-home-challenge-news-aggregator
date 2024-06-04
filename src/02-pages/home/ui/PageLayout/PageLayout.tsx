import { type ReactElement } from 'react'

import Stack from 'src/06-shared/ui/Stack'

import styles from './styles.module.scss'

function PageLayout({ TopPanel, Content }: { Content: ReactElement, TopPanel: ReactElement }) {
  return (
    <Stack className={styles.container}>
      {TopPanel}
      {Content}
    </Stack>
  )
}

export default PageLayout
