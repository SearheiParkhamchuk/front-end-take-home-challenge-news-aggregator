import { Suspense } from 'react'

import AppSearch from '@/05-entities/app/ui/AppSearch'
import Logo from '@/05-entities/app/ui/Logo'

import styles from './styles.module.scss'

function PageHeader({ ...rest }: {}) {
  return (
    <div {...rest} className={styles.inner}>
      <Logo />
      <Suspense>
        <div className={styles['search-container']}><AppSearch /></div>
      </Suspense>
    </div>
  )
}

export default PageHeader
