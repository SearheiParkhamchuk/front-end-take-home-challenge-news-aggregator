import Logo from '@/05-entities/app/ui/Logo'

import styles from './styles.module.scss'

function PageHeader({ ...rest }: {}) {
  return (
    <footer className={styles.footer} {...rest}>
      <Logo />
    </footer>
  )
}

export default PageHeader
