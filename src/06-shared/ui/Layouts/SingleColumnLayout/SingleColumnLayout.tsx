import styles from './styles.module.scss'
import { type SingleColumnLayoutProps } from './types'

function SingleColumnLayout({ header, body, footer, ...rest }: SingleColumnLayoutProps) {
  return (
    <div className={styles.container} {...rest}>
      <header className={styles.header}>
        <section className={styles.section}>{header}</section>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>{body}</section>
      </main>
      <footer className={styles.footer}>
        <section className={styles.section}>{footer}</section>
      </footer>
    </div>
  )
}

export default SingleColumnLayout
