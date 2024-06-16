import Animation from 'src/06-shared/ui/Animation'
import { GRID_VIEW } from 'src/06-shared/ui/GridViewButton/model'

import { classnamesView } from './classnames'
import styles from './styles.module.scss'
import { type ArticlesGridProps } from './types'

function ArticlesGrid({ children, loading, view = GRID_VIEW.GRID }: ArticlesGridProps) {
  return (
    <Animation delay='1s' variant={loading ? 'pulse' : 'none'}>
      {({ className, style }) => (
        <div className={`${styles.container} ${classnamesView[view].grid} ${className}`} style={style}>
          {children}
        </div>
      )}
    </Animation>
  )
}

export default ArticlesGrid
