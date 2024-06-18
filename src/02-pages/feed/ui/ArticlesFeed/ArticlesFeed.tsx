'use client'
import { ArticlePages, ArticlesInfiniteFeed } from 'src/04-features/articles-feed/index.ui'

import { articlesModel } from 'src/05-entities/articles'
import { articlesClientApi } from 'src/05-entities/articles/index.client'
import { Article } from 'src/05-entities/articles/index.ui'

import { useSearchParams } from 'src/06-shared/lib/third-party/router/useSearchParams'
import { withSuspense } from 'src/06-shared/lib/utils/HOK/withSuspense'
import Alert from 'src/06-shared/ui/Alert'

import { pageNumberIndicator } from 'src/06-shared/ui/InfiniteScroll'
import PageError from 'src/06-shared/ui/LayoutNotFoundError'

function ArticlesFeed() {
  const [searchParams] = useSearchParams();
  const articlesParams = articlesModel.getArticlesQueryParams(searchParams);
  const infinite = articlesClientApi.useGetArticlesInfinite(articlesParams);
  const noArticlesFound = infinite.data.pages.flat().length === 0
  const articlesLoading = infinite.isFetching && !(infinite.isFetchingNextPage || infinite.isFetchingNextPage)

  if (noArticlesFound) return <PageError title='No articles found' />

  return (
    <>
      {infinite.error && <Alert variant='error'>{infinite.error.message}</Alert>}
      <ArticlesInfiniteFeed>
        <ArticlePages
          loading={articlesLoading}
          pages={infinite.data.pages}
          renderItem={(article, options) => (
            <Article
              alt={article.title}
              description={article.description ?? ''}
              key={article.uuid}
              orientation={options.orientation}
              poster={article.thumbnail ?? article.media.images[0]?.url ?? null}
              publishedAt={article.published_at}
              source={article.source_url}
              sourceName={article.source_name}
              title={article.title}
              {...(options.articleIndex === 0 && pageNumberIndicator(options.page))}
            />
          )}
        />
      </ArticlesInfiniteFeed>
    </>
  )
}

export default withSuspense(ArticlesFeed)
