import styles from './styles.module.scss'
import { type SingleColumnLayoutProps } from './types'

function SingleColumnLayout({ header, body, footer, ...rest }: SingleColumnLayoutProps) {
  return (
    <div className={styles.container} {...rest}>
      <header className={styles.header}>
        <div className={styles.section}>{header}</div>
      </header>
      <main className={styles.main}>
        <div className={styles.section}>{body}</div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.section}>{footer}</div>
      </footer>
    </div>
  )
}

export default SingleColumnLayout
