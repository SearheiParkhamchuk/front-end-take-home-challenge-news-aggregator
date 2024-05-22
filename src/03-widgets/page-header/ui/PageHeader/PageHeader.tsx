import Logo from '@/05-entities/app/ui/Logo'

import styles from './styles.module.scss'

function PageHeader() {
  return (
    <div className={styles.inner}>
      <Logo />
    </div>
  )
}

export default PageHeader
