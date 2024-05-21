import { type ArticleRemoteSource } from './@types'
import { type NewsSource, type SourceResponse } from './model/news-source.abstract'

export class NewsSourcesEntitiesService {
  static selectData(data: Array<SourceResponse<ArticleRemoteSource[]>>): ArticleRemoteSource[] {
    return data
      .filter((s): s is { data: ArticleRemoteSource[], error: null } => !!s.data)
      .map(s => s.data)
      .flat()
  }

  constructor(private readonly sources: NewsSource[]) {}

  getAll(): NewsSource[] {
    return this.sources
  }

  getBySourcesName(sources: string[]): NewsSource[] {
    return this.sources.filter(s => sources.includes(s.source))
  }

  async fetchBySourcesName(sources: string[]): Promise<Array<SourceResponse<ArticleRemoteSource[]>>> {
    return this.fetch(this.getBySourcesName(sources))
  }

  async fetchAll(): Promise<Array<SourceResponse<ArticleRemoteSource[]>>> {
    return this.fetch(this.getAll())
  }

  private async fetch(sources: NewsSource[]): Promise<Array<SourceResponse<ArticleRemoteSource[]>>> {
    const response = await Promise.all(sources.map(async s => s.getAll()))
    return response.map(s => s.adapter())
  }
}
