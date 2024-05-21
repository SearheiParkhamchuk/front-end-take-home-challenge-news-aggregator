import { never } from '@/06-shared/lib/utils/misc/never'
import { type XMLParser } from '@/server/shared/xml-parser'

import { BBCNewsSourceEntity } from './entities/bbc/source.entity'
import { CNNNewsSourceEntity } from './entities/cnn/source.entity'
import { NytNewsSourceEntity } from './entities/nyt/source.entity'
import { TheWallStreeJournalNewsSourceEntity } from './entities/the-wall-stree-journal/source.entity'
import { NEWS_SOURCES } from './model/@enums/news-sources'
import { type NewsSource, type SourceOptions } from './model/news-source.abstract'

export class NewsSourcesEntitiesFactory {
  constructor(private readonly parser: XMLParser) {}

  create(source: NEWS_SOURCES, options: SourceOptions): NewsSource {
    switch (source) {
      case NEWS_SOURCES.BBC: return new BBCNewsSourceEntity(options, this.parser)
      case NEWS_SOURCES.CNN: return new CNNNewsSourceEntity(options, this.parser)
      case NEWS_SOURCES.NYT: return new NytNewsSourceEntity(options, this.parser)
      case NEWS_SOURCES.WALL_STREET_JOURNAL: return new TheWallStreeJournalNewsSourceEntity(options, this.parser)
      default: return never(null, `Unknown news source ${source}`)
    }
  }
}
