import styles from './styles.module.scss'
import { type ArticlesGridProps } from './types'

function ArticlesGrid({ children, ...rest }: ArticlesGridProps) {
  return <div className={styles.grid} {...rest}>{children}</div>
}

export default ArticlesGrid
