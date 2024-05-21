import { CronJob } from 'cron'

import { type ArticlessRepository } from '@/server/entities/articles-repository'
import { coloredLog } from '@/server/shared/lib/colored-log'

export class NewsDeletionSchedulerService {
  private static job: CronJob
  private static instance: NewsDeletionSchedulerService

  private constructor(private readonly articlesRepository: ArticlessRepository) {
    NewsDeletionSchedulerService.job = CronJob.from({
      cronTime: '*/30 * * * *',
      onTick: this.tick.bind(this),
      start: false
    })
  }

  public static getInstance(newsTTLRepository: ArticlessRepository): NewsDeletionSchedulerService {
    if (!NewsDeletionSchedulerService.instance) {
      NewsDeletionSchedulerService.instance = new NewsDeletionSchedulerService(newsTTLRepository)
      return NewsDeletionSchedulerService.instance
    }

    return NewsDeletionSchedulerService.instance
  }

  start() {
    NewsDeletionSchedulerService.job.start()
    return this
  }

  stop(): void {
    NewsDeletionSchedulerService.job.stop()
  }

  async tick(): Promise<void> {
    try {
      await this.articlesRepository.deleteExpired()
      coloredLog('CRONEJOB: News deletion completed successfully', 'success')
    } catch (e) {
      coloredLog('CRONEJOB: News deletion failed', 'error')
      coloredLog(e, 'error')
    }
  }
}
