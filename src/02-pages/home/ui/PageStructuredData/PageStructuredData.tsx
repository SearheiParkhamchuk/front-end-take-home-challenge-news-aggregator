import { type Article, type WebPage, type WithContext } from 'schema-dts'

import { ARTICLES_SEARCH_PARAMS_KEYS, type ArticleServer, type ArticlesRequestParams, articlesSharedApi } from 'src/05-entities/articles';
import { getFetcherInstanceServer } from 'src/06-shared/lib/third-party/fetcher/get-fetcher-instance-server';

type StructuredDataProps = { searchParams: ArticlesRequestParams };
const articlesRequestClient = articlesSharedApi.articlesRequest(getFetcherInstanceServer());
const articleToItemListElement = (article: ArticleServer): Article => ({
  '@type': 'NewsArticle',
  'headline': article.title,
  'datePublished': article.published_at,
  'publisher': {
    '@type': 'Organization',
    'name': article.source_name
  },
  'url': article.source_url,
  'image': article.thumbnail
})

async function HomePageStructuredData({ searchParams }: StructuredDataProps) {
  const response = await articlesRequestClient(searchParams);

  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'url': `${process.env.NEXT_SERVER_APP_ORIGIN}/?${ARTICLES_SEARCH_PARAMS_KEYS.A_PAGE}=${searchParams.page}`,
    'name': `${process.env.NEXT_PUBLIC_APP_NAME} - News Aggregator`,
    'description': 'A news aggregator site that provides an infinite stream of articles from various sources.',
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': response.data.map(articleToItemListElement)
    }
  }

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  )
}

export default HomePageStructuredData
