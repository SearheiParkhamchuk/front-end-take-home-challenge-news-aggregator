import { type Article, type WebPage, type WithContext } from 'schema-dts'

import { articlesRequest } from 'src/04-features/articles/api/request';
import { type ArticleServer, type ArticlesClientQueryParams } from 'src/04-features/articles/model/@types';
import { SEARCH_PARAMS_KEYS } from 'src/05-entities/app/model/search-params-keys';
import { getFetcherInstanceServer } from 'src/06-shared/lib/third-party/fetcher/get-fetcher-instance-server';

type StructuredDataProps = { searchParams: ArticlesClientQueryParams };
const articlesRequestClient = articlesRequest(getFetcherInstanceServer());
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
    'url': `${process.env.NEXT_SERVER_APP_ORIGIN}/?${SEARCH_PARAMS_KEYS.A_PAGE}=${searchParams.page}`,
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
