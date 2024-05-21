import { type XMLParser } from '@/server/shared/xml-parser'

import { type RawDataSource } from './@types'
import { type ArticleRemoteSource } from '../../@types'
import { NEWS_SOURCES } from '../../model/@enums/news-sources'
import { NewsSource, type SourceOptions, type SourceResponse } from '../../model/news-source.abstract'

export class BBCNewsSourceEntity extends NewsSource<RawDataSource> {
  readonly source = NEWS_SOURCES.BBC
  constructor(readonly options: SourceOptions, readonly parser: XMLParser) {
    super(options, parser)
  }

  adapter(): SourceResponse<ArticleRemoteSource[]> {
    const rawData = this.data
    if (!rawData) return { error: this.error ?? new Error('Internal server error'), data: null }

    const data = rawData.rss.channel.item.map(item => {
      const thumbnail = item['media:thumbnail']
      return {
        description: item.description,
        id: item.guid['#text'],
        publishedAt: new Date(item.pubDate),
        source: { name: rawData.rss.channel.title, src: item.link },
        thumbnail: thumbnail?.['@_url'] ?? undefined,
        title: item.title,
        media: {
          images: thumbnail
            ? [{ width: thumbnail['@_width'].toString(), height: thumbnail['@_height'].toString(), url: thumbnail['@_url'] }]
            : []
        }
      }
    })

    return { error: null, data }
  }
}
