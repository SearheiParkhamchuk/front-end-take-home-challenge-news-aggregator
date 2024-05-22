'use client'
import ArticleComponent from '@/05-entities/articles/ui/Article'
import { withSuspense } from '@/06-shared/lib/utils/HOK/withSuspense'

import { type ArticleRenderOptions, type ArticlesProps } from './types'
import { useFetchArticlesInfinite } from '../../api/articles-infinite/fetch-articles-infinite.client'
import { useClearArticlesCache } from '../../lib/useClearArticlesCache'
import { type Article } from '../../model/@types'
import { prepareArticles } from '../../model/prepare-articles'
import { useArticlesSearchParams } from '../../model/useArticlesSearchParams'

function Articles({ orientation, renderItem, ...rest }: ArticlesProps) {
  const [searchParams] = useArticlesSearchParams()
  const inifinite = useFetchArticlesInfinite(searchParams)
  const data = inifinite.data.pages.map((d) => prepareArticles(d.data))

  useClearArticlesCache()

  const articleRenderer = (article: Article) => (
    <ArticleComponent
      {...rest}
      alt={article.title}
      description={article.description ?? ''}
      key={article.uuid}
      orientation={orientation}
      poster={article.thumbnail ?? article.media.images[0]?.url ?? null}
      publishedAt={article.published_at}
      source={article.source}
      sourceName={article.source_name}
      title={article.title}
    />
  )

  return data?.map(
    (articles, pageIndex) => articles.map(
      (article, articleIndex) => {
        const renderOptions: ArticleRenderOptions = { page: inifinite.data.pageParams[pageIndex], pageIndex, articleIndex }
        const render = articleRenderer(article)
        return renderItem ? renderItem(render, renderOptions) : render
      }))
}

export default withSuspense(Articles)
