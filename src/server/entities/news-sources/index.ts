import { partial } from 'lodash'

import { XMLParser } from '@/server/shared/xml-parser'

import { NEWS_SOURCES } from './model/@enums/news-sources'
import { NewsSourcesEntitiesFactory } from './news-sources.factory'
import { NewsSourcesEntitiesService } from './news-sources.service'

const xmlParser = new XMLParser()
const sourcesFactory = new NewsSourcesEntitiesFactory(xmlParser)
const bindedCreate = sourcesFactory.create.bind(sourcesFactory)
const bbcSources = partial(bindedCreate, NEWS_SOURCES.BBC)
const cnnSources = partial(bindedCreate, NEWS_SOURCES.CNN)
const nytSources = partial(bindedCreate, NEWS_SOURCES.NYT)
const wsjSources = partial(bindedCreate, NEWS_SOURCES.WALL_STREET_JOURNAL)

const BBC_SOURCE_OPTIONS = [
  { title: 'BBC World', url: 'https://feeds.bbci.co.uk/news/world/rss.xml' },
  { title: 'BBC UK', url: 'https://feeds.bbci.co.uk/news/uk/rss.xml' },
  { title: 'BBC Popular', url: 'https://feeds.bbci.co.uk/news/rss.xml' },
  { title: 'BBC Politics', url: 'https://feeds.bbci.co.uk/news/politics/rss.xml' },
  { title: 'BBC Business', url: 'https://feeds.bbci.co.uk/news/business/rss.xml' },
  { title: 'BBC Health', url: 'https://feeds.bbci.co.uk/news/health/rss.xml' },
  { title: 'BBC Education & Family', url: 'https://feeds.bbci.co.uk/news/education/rss.xml' },
  { title: 'BBC Science & Environment', url: 'https://feeds.bbci.co.uk/news/science_and_environment/rss.xml' },
  { title: 'BBC Technology', url: 'https://feeds.bbci.co.uk/news/technology/rss.xml' },
  { title: 'BBC Technology', url: 'https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml' }
]

const CNN_SOURCE_OPTIONS = [
  { title: 'CNN Most Popular', url: 'http://rss.cnn.com/rss/cnn_latest.rss' },
  { title: 'CNN Money Top Stories', url: 'http://rss.cnn.com/rss/money_topstories.rss' },
  { title: 'CNN Money Most Popular', url: 'http://rss.cnn.com/rss/money_mostpopular.rss' },
  { title: 'CNN Money Companies', url: 'http://rss.cnn.com/rss/money_news_companies.rss' },
  { title: 'CNN Money International', url: 'http://rss.cnn.com/rss/money_news_international.rss' },
  { title: 'CNN Money Economy', url: 'http://rss.cnn.com/rss/money_news_economy.rss' },
  { title: 'CNN Money Media', url: 'http://rss.cnn.com/rss/money_media.rss' },
  { title: 'CNN Money Technology', url: 'http://rss.cnn.com/rss/money_technology.rss' },
  { title: 'CNN Money Lifestyle', url: 'http://rss.cnn.com/rss/money_lifestyle.rss' },
  { title: 'CNN Money Real Estate', url: 'http://rss.cnn.com/rss/money_realestate.rss' },
  { title: 'CNN Money Luxury', url: 'http://rss.cnn.com/rss/money_luxury.rss' }
]

const NYT_SOURCE_OPTIONS = [
  { title: 'New York Times World', url: 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml' },
  { title: 'New York Times Europe', url: 'https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml' },
  { title: 'New York Times Americans', url: 'https://rss.nytimes.com/services/xml/rss/nyt/Americas.xml' },
  { title: 'New York Times Americans', url: 'https://rss.nytimes.com/services/xml/rss/nyt/Africa.xml' }
]

const WSJ_SOURCE_OPTIONS = [
  { title: 'The Wall Stree Journal World', url: 'https://feeds.a.dj.com/rss/RSSWorldNews.xml' },
  { title: 'The Wall Stree Journal Business', url: 'https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml' },
  { title: 'The Wall Stree Journal Lifestyle', url: 'https://feeds.a.dj.com/rss/RSSLifestyle.xml' },
  { title: 'The Wall Stree Journal Technology', url: 'https://feeds.a.dj.com/rss/RSSWSJD.xml' }
]

const SOURCES = [
  BBC_SOURCE_OPTIONS.map(bbcSources),
  CNN_SOURCE_OPTIONS.map(cnnSources),
  NYT_SOURCE_OPTIONS.map(nytSources),
  WSJ_SOURCE_OPTIONS.map(wsjSources)
]
const newsEntitiesService = new NewsSourcesEntitiesService(SOURCES.flat())

export { newsEntitiesService, NewsSourcesEntitiesService }
