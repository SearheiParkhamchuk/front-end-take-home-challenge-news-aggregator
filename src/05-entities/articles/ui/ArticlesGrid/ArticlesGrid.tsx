import { GRID_VIEW } from 'src/06-shared/ui/GridViewButton/model'

import { classnamesView } from './classnames'
import styles from './styles.module.scss'
import { type ArticlesGridProps } from './types'

function ArticlesGrid({ children, className = '', style, view = GRID_VIEW.GRID, ...rest }: ArticlesGridProps) {
  return (
    <div {...rest} className={`${styles.container} ${classnamesView[view].grid} ${className}`} style={style}>
      {children}
    </div>
  )
}

export default ArticlesGrid
