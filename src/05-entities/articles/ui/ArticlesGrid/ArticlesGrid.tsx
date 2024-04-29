import { Grid } from './styles'
import { type ArticlesGridProps } from './types'

function ArticlesGrid({ children, ...rest }: ArticlesGridProps) {
  return <Grid {...rest}>{children}</Grid>
}

export default ArticlesGrid
