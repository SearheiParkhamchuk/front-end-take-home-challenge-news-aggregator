import { type XMLParser } from '@/server/shared/xml-parser'

import { type RawDataSource } from './@types'
import { type ArticleRemoteSource } from '../../@types'
import { NEWS_SOURCES } from '../../model/@enums/news-sources'
import { NewsSource, type SourceOptions, type SourceResponse } from '../../model/news-source.abstract'

const DEFAULT_POSTER = 'https://s.wsj.net/img/meta/wsj-social-share.png'

export class TheWallStreeJournalNewsSourceEntity extends NewsSource<RawDataSource> {
  readonly source = NEWS_SOURCES.NYT
  constructor(readonly options: SourceOptions, readonly parser: XMLParser) {
    super(options, parser)
  }

  adapter(): SourceResponse<ArticleRemoteSource[]> {
    const rawData = this.data
    if (!rawData) return { error: this.error ?? new Error('Internal server error'), data: null }

    const data = rawData.rss.channel.item.map(item => ({
      description: item.description,
      id: item.guid['#text'],
      publishedAt: new Date(item.pubDate),
      source: { name: rawData.rss.channel.title, src: item.link },
      thumbnail: DEFAULT_POSTER,
      title: item.title,
      media: { images: [] }
    }))

    return { error: null, data }
  }
}
