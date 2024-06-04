'use client'
import Logo from 'src/05-entities/app/ui/Logo'
import ToggleThemeButton from 'src/05-entities/app/ui/ToggleThemeButton/ToggleThemeButton'

import styles from './styles.module.scss'

function PageHeader() {
  return (
    <div className={styles.inner}>
      <Logo />
      <ToggleThemeButton />
    </div>
  )
}

export default PageHeader
