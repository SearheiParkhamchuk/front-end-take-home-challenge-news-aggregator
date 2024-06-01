'use client'
import ArticleComponent from '@/05-entities/articles/ui/Article'
import { withSuspense } from '@/06-shared/lib/utils/HOK/withSuspense'

import { type ArticleRenderOptions, type ArticlesProps } from './types'
import { type Article } from '../../model/@types'

function Articles({ orientation, data, renderItem }: ArticlesProps) {
  const articleRenderer = (article: Article) => (
    <ArticleComponent
      alt={article.title}
      description={article.description ?? ''}
      key={article.uuid}
      orientation={orientation}
      poster={article.thumbnail ?? article.media.images[0]?.url ?? null}
      publishedAt={article.published_at}
      source={article.source_url}
      sourceName={article.source_name}
      title={article.title}
    />
  )

  return data.pages.map(
    (articles, pageIndex) => articles.map(
      (article, articleIndex) => {
        const renderOptions: ArticleRenderOptions = { page: data.pageParams[pageIndex], pageIndex, articleIndex }
        const render = articleRenderer(article)
        return renderItem ? renderItem(render, renderOptions) : render
      }))
}

export default withSuspense(Articles)
