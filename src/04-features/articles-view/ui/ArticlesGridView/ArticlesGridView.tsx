import ArticlesGrid from 'src/05-entities/articles/ui/ArticlesGrid'
import Animation from 'src/06-shared/ui/Animation'

import { type ArticlesGridViewProps } from './types'

function ArticlesGridView({ children, view, loading }: ArticlesGridViewProps) {
  return (
    <Animation variant={loading ? 'blur' : 'none'}>
      {({ className }) => (
        <ArticlesGrid className={className} view={view}>
          {children}
        </ArticlesGrid>
      )}
    </Animation>
  )
}

export default ArticlesGridView
