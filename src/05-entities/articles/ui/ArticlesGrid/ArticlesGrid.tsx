import { GRID_VIEW } from '@/06-shared/ui/GridViewButton/model'

import { classnamesView } from './classnames'
import { type ArticlesGridProps } from './types'

function ArticlesGrid({ children, view = GRID_VIEW.GRID, ...rest }: ArticlesGridProps) {
  return <div {...rest} className={classnamesView[view].grid}>{children}</div>
}

export default ArticlesGrid
