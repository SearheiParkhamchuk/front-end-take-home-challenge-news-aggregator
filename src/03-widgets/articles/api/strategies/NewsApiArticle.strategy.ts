import { getCacheInstance } from '@/06-shared/lib/third-party/cache/get-cache-instance'

import { type ISOString } from '@/06-shared/lib/types/ISOString'

import { ArticleStrategy, type FetchOptions } from './Article.abstract'
import { type Article } from '../types/Article'

type ApiArticleSuccess = {
  articles: Array<{
    author: string
    content: string
    description: string
    publishedAt: ISOString
    source: { id: null, name: string }
    title: string
    url: string
    urlToImage: string
  }>
  status: 'ok'
  totalResults: number
}

type ApiArticleError = {
  code: string
  message: string
  status: 'error'
}

type ApiArticleResponse = ApiArticleSuccess | ApiArticleError

export class NewsApiArticleStrategy extends ArticleStrategy {
  private readonly url = 'https://newsapi.org/v2/everything'
  private readonly apiKey = process.env.API_KEY_NEWS_API

  async fetch(options: FetchOptions = { pageSize: 10, query: 'any' }) {
    const url = this.paramsAdapter(options)
    const cache = getCacheInstance()

    return await cache.fetchQuery({
      queryKey: ['articles', options, 'news_api'],
      queryFn: async () => {
        const data: ApiArticleResponse = await (await fetch(url)).json()
        if (data.status === 'error') return { error: new Error(data.message), data: null }
        return { error: null, data: this.responseAdapter(data) }
      }
    })
  }

  private paramsAdapter(options: FetchOptions): URL {
    const url = new URL(this.url)

    if (options.query) url.searchParams.set('q', options.query)
    if (options.page) url.searchParams.set('page', options.page.toString())
    if (options.pageSize) url.searchParams.set('pageSize', options.pageSize.toString())
    url.searchParams.set('apiKey', this.apiKey)

    return url
  }

  private responseAdapter(data: ApiArticleSuccess): { articles: Article[] } {
    return {
      articles: data.articles.map(article => ({
        description: article.description,
        publishedAt: new Date(article.publishedAt),
        source: { name: article.source.name, src: article.url },
        thumbnail: article.urlToImage,
        title: article.title
      }))
    }
  }
}
