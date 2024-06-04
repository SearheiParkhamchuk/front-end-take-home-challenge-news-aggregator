import ArticlesGrid from 'src/05-entities/articles/ui/ArticlesGrid'
import Animation from 'src/06-shared/ui/Animation'

import { type ArticlesGridViewProps } from './types'

function ArticlesGridView({ children, view, loading }: ArticlesGridViewProps) {
  return (
    <Animation delay='1s' variant={loading ? 'pulse' : 'none'}>
      {({ className, style }) => (
        <ArticlesGrid className={className} style={style} view={view}>
          {children}
        </ArticlesGrid>
      )}
    </Animation>
  )
}

export default ArticlesGridView
