import { ILike, LessThanOrEqual, type Repository } from 'typeorm'

import { coloredLog } from '@/server/shared/lib/colored-log'
import { type StoreClient } from '@/server/shared/store-client'

import { type ArticleLocalSource, type ArticleLocalSourceDehydrated, type ArticleSourceDTO } from './@types'
import { ArticleEntity } from './articles-repository.schema'

export type CacheStoreGetManyOptions = {
  page: number
  query: string | null
  size: number
  sort?: {
    by: string
    direction?: 'ASC' | 'DESC'
  }
}

export class ArticlessRepository {
  private readonly repository: Repository<ArticleEntity>

  constructor(cacheClient: StoreClient) {
    this.repository = cacheClient.getRepository(ArticleEntity)
  }

  async insertMany(data: ArticleSourceDTO[]): Promise<ArticleLocalSource[]> {
    try {
      const result = await this.repository
        .createQueryBuilder()
        .insert()
        .into(ArticleEntity)
        .values(data)
        .orUpdate(['title', 'description', 'expireAt'])
        .orIgnore()
        .returning('*')
        .execute()

      const rawData = result.raw as ArticleLocalSourceDehydrated[]

      const hydratedResult = rawData.map(d => ({
        ...d,
        media: JSON.parse(d.media),
        source: JSON.parse(d.source)
      }))
      return hydratedResult
    } catch (e) {
      coloredLog(e, 'error')
      return []
    }
  }

  async getMany(options: CacheStoreGetManyOptions) {
    const order = options.sort ? { [options.sort.by]: options.sort.direction } : undefined
    const result = await this.repository.find({
      where: [
        { title: ILike(`%${options.query}%`) },
        { description: ILike(`%${options.query}%`) }
      ],
      order,
      take: options.size,
      skip: options.size * options.page
    })

    return result
  }

  async deleteExpired(): Promise<void> {
    const expired = await this.repository.findBy({ expireAt: LessThanOrEqual(new Date()) })
    await this.repository.remove(expired)
  }
}
