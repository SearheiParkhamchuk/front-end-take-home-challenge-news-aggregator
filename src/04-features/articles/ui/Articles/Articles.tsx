'use client'
import ArticleComponent from '@/05-entities/articles/ui/Article'
import { withSuspense } from '@/06-shared/lib/utils/HOK/withSuspense'

import { type ArticleRenderOptions, type ArticlesProps } from './types'
import { useFetchArticlesInfinite } from '../../api/fetch-articles-infinite.client'
import { useClearArticlesCache } from '../../lib/hooks/useClearArticlesCache'
import { type Article } from '../../model/@types'
import { prepareArticles } from '../../model/prepare-articles'
import { useArticlesSearchParams } from '../../model/useArticlesSearchParams'

function Articles({ orientation, renderItem, ...rest }: ArticlesProps) {
  const [searchParams] = useArticlesSearchParams()
  const inifinite = useFetchArticlesInfinite(searchParams)
  const data = inifinite.data.pages.map(prepareArticles)

  useClearArticlesCache()

  const articleRenderer = (article: Article, options: ArticleRenderOptions) => (
    <ArticleComponent
      {...rest}
      alt={article.title}
      description={article.description}
      key={`${options.pageIndex}-${options.articleIndex}`}
      orientation={orientation}
      publishedAt={article.publishedAt}
      source={article.source}
      src={article.thumbnail}
      title={article.title}
    />
  )

  return data?.map(
    (articles, pageIndex) => articles.map(
      (article, articleIndex) => {
        const renderOptions: ArticleRenderOptions = { page: inifinite.data.pageParams[pageIndex], pageIndex, articleIndex }
        const render = articleRenderer(article, renderOptions)
        return renderItem ? renderItem(render, renderOptions) : render
      }))
}

export default withSuspense(Articles)
