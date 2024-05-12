'use client'
import { useArticlesView } from '@/05-entities/articles/lib/useArticlesView'
import { withSuspense } from '@/06-shared/lib/utils/HOK/withSuspense'
import GridViewButton from '@/06-shared/ui/GridViewButton'

function ArticlesGridViewButton() {
  const [view, setView] = useArticlesView()

  return <GridViewButton value={view} onChange={setView} />
}

export default withSuspense(ArticlesGridViewButton)
