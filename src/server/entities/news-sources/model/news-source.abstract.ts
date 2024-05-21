import { type XMLParser } from '@/server/shared/xml-parser'

import { type ArticleRemoteSource } from '../@types'

export type SourceOptions = {
  title: string
  url: string
}

export type SourceResponse<D> = {
  data: null
  error: Error
} | {
  data: D
  error: null
}

export abstract class NewsSource<D = any> {
  data: D | undefined
  error: Error | undefined
  abstract source: string
  constructor(readonly options: SourceOptions, readonly parser: XMLParser) {}

  abstract adapter(): SourceResponse<ArticleRemoteSource[]>

  async getAll(): Promise<this> {
    const rawData = await fetch(this.options.url)
    if (rawData.status >= 400) {
      this.error = new Error(rawData.statusText)
    } else {
      const buffer = Buffer.from(await rawData.arrayBuffer())
      this.data = this.parser.parse(buffer)
    }

    return this
  }
}
