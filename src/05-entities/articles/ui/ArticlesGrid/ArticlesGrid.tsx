import Animation from 'src/06-shared/ui/Animation'
import { GRID_VIEW } from 'src/06-shared/ui/GridViewButton/model'

import { classnamesView } from './classnames'
import { type ArticlesGridProps } from './types'

function ArticlesGrid({ children, loading, view = GRID_VIEW.GRID }: ArticlesGridProps) {
  return (
    <Animation delay='1s' variant={loading ? 'pulse' : 'none'}>
      {({ className, style }) => (
        <div className={`${classnamesView[view].grid} ${className}`} style={style}>
          {children}
        </div>
      )}
    </Animation>
  )
}

export default ArticlesGrid
