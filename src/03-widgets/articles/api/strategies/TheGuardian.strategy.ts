import { getCacheInstance } from '@/06-shared/lib/third-party/cache/get-cache-instance'

import { type ISOString } from '@/06-shared/lib/types/ISOString'

import { ArticleStrategy, type FetchOptions } from './Article.abstract'
import { type Article } from '../types/Article'

type ApiArticleSuccess = {
  currentPage: number
  orderBy: 'relevance'
  pageSize: number
  pages: number
  results: Array<{
    apiUrl: string
    fields: {
      thumbnail: string | null
      trailText: string
    }
    id: string
    isHosted: boolean
    pillarId: string
    pillarName: string
    sectionId: string
    sectionName: string
    type: 'article'
    webPublicationDate: ISOString
    webTitle: string
    webUrl: string
  }>
  startIndex: number
  status: 'ok'
  total: number
  userTier: 'developer'
}

type ApiArticleError = {
  code: string
  message: string
  status: 'error'
}

type ApiArticleResponse = {
  response: ApiArticleSuccess | ApiArticleError
}

export class TheGuardianStrategy extends ArticleStrategy {
  private readonly url = 'https://content.guardianapis.com/search'
  private readonly apiKey = process.env.API_KEY_THE_GUARDIAN

  async fetch(options: FetchOptions = { pageSize: 10, query: 'any' }) {
    const url = this.paramsAdapter(options)
    const cache = getCacheInstance()

    return await cache.fetchQuery({
      queryKey: ['articles', options, 'the_guardian'],
      queryFn: async () => {
        const data: ApiArticleResponse = await (await fetch(url)).json()
        if (data.response.status === 'error') return { error: new Error(data.response.message), data: null }
        return { error: null, data: this.responseAdapter(data.response) }
      }
    })
  }

  private paramsAdapter(options: FetchOptions): URL {
    const url = new URL(this.url)

    if (options.query) url.searchParams.set('q', options.query)
    if (options.page) url.searchParams.set('page', options.page.toString())
    if (options.pageSize) url.searchParams.set('page-size', options.pageSize.toString())

    url.searchParams.set('api-key', this.apiKey)
    url.searchParams.set('show-fields', 'trail-text,thumbnail')

    return url
  }

  private responseAdapter(data: ApiArticleSuccess): { articles: Article[] } {
    return {
      articles: data.results.map(article => ({
        description: article.fields.trailText,
        publishedAt: new Date(article.webPublicationDate),
        source: { name: 'The Guardian', src: article.webUrl },
        thumbnail: article.fields.thumbnail,
        title: article.webTitle
      }))
    }
  }
}
