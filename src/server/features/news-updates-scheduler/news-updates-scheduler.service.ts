import { CronJob } from 'cron'

import { type ArticlessRepository } from '@/server/entities/articles-repository'
import { type ArticleSourceDTO } from '@/server/entities/articles-repository/@types'
import { NewsSourcesEntitiesService } from '@/server/entities/news-sources'
import { coloredLog } from '@/server/shared/lib/colored-log'

export class NewsUpdatesSchedulerService {
  private static job: CronJob
  private static instance: NewsUpdatesSchedulerService

  private constructor(
    private readonly entitiesService: NewsSourcesEntitiesService,
    private readonly articlesRepository: ArticlessRepository
  ) {
    NewsUpdatesSchedulerService.job = CronJob.from({
      cronTime: `*/${process.env.NEWS_UPDATES_CHECK_INTERVAL_MINUTES} * * * *`,
      onTick: this.tick.bind(this),
      start: false
    })
  }

  public static getInstance(
    articlesEntitiesService: NewsSourcesEntitiesService,
    articlesRepository: ArticlessRepository
  ): NewsUpdatesSchedulerService {
    if (!NewsUpdatesSchedulerService.instance) {
      NewsUpdatesSchedulerService.instance = new NewsUpdatesSchedulerService(articlesEntitiesService, articlesRepository)
      return NewsUpdatesSchedulerService.instance
    }

    return NewsUpdatesSchedulerService.instance
  }

  start() {
    NewsUpdatesSchedulerService.job.start()
    return this
  }

  stop(): void {
    NewsUpdatesSchedulerService.job.stop()
  }

  async tick(): Promise<void> {
    try {
      const expireAt = new Date()
      expireAt.setMinutes(expireAt.getMinutes() + Number(process.env.NEWS_EXPIRATION_MINUTES))
      const rawData = await this.entitiesService.fetchAll()
      const articlesReceived = NewsSourcesEntitiesService.selectData(rawData)
      const articles: ArticleSourceDTO[] = articlesReceived.map(d => ({ ...d, expire_at: expireAt }))
      await this.articlesRepository.insertMany(articles)

      const errors = rawData.filter(d => !!d.error)

      coloredLog('CRONEJOB: Receiving news completed successfully')
      if (errors.length) coloredLog(`ERRORS: ${errors.length}`, 'error')
    } catch (e) {
      coloredLog('CRONEJOB: Receiving news failed', 'error')
      coloredLog(e, 'error')
    }
  }
}
