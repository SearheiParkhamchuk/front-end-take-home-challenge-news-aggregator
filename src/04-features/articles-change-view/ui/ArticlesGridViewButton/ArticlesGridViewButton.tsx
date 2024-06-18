'use client'
import { useArticlesView } from 'src/05-entities/articles/index.client'
import { withSuspense } from 'src/06-shared/lib/utils/HOK/withSuspense'
import GridViewButton from 'src/06-shared/ui/GridViewButton'

function ArticlesGridViewButton() {
  const [view, setView] = useArticlesView()

  return <GridViewButton value={view} onChange={setView} />
}

export default withSuspense(ArticlesGridViewButton)
