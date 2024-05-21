import 'reflect-metadata'

import { ArticlessRepository } from './entities/articles-repository'
import { ArticleEntity } from './entities/articles-repository/articles-repository.schema'
import { newsEntitiesService } from './entities/news-sources'
import { NewsDeletionSchedulerService } from './features/news-deletion-scheduler'
import { NewsUpdatesSchedulerService } from './features/news-updates-scheduler'
import { StoreClient } from './shared/store-client'

const app = (async() => {
  const storeClient = await StoreClient.getInstance({
    db_password: process.env.CACHE_DB_PASSWORD,
    db_port: process.env.CACHE_DB_PORT,
    db_username: process.env.CACHE_DB_USERNAME,
    db_name: process.env.CACHE_DB_NAME,
    entities: [ArticleEntity]
  }).connect()

  const newsRepository = new ArticlessRepository(storeClient)
  const newsDeletionJob = NewsDeletionSchedulerService.getInstance(newsRepository)
  const entitiesJob = NewsUpdatesSchedulerService.getInstance(newsEntitiesService, newsRepository)
  await Promise.all([entitiesJob.start().tick(), newsDeletionJob.start().tick()])

  return { newsRepository }
})()

export { app }
