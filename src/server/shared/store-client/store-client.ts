import { DataSource, type EntitySchema, type EntityTarget, type MixedList, type ObjectLiteral, type Repository } from 'typeorm'

export type CacheStoreOptions = {
  db_name: string
  db_password: string
  db_port: number
  db_username: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  entities: MixedList<Function | string | EntitySchema>
}

export class StoreClient {
  private static instance: StoreClient
  private readonly client: DataSource

  private constructor(cacheOptions: CacheStoreOptions) {
    this.client = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: cacheOptions.db_port,
      username: cacheOptions.db_username,
      password: cacheOptions.db_password,
      database: cacheOptions.db_name,
      synchronize: true,
      logging: ['info', 'migration', 'schema', 'warn', 'error', 'log'],
      entities: cacheOptions.entities,
      subscribers: [],
      migrations: []
    })
  }

  static getInstance(options: CacheStoreOptions) {
    if (!StoreClient.instance) {
      StoreClient.instance = new StoreClient(options)
    }

    return StoreClient.instance
  }

  getRepository<E extends ObjectLiteral>(entity: EntityTarget<E>): Repository<E> {
    return this.client.getRepository(entity)
  }

  async connect(): Promise<this> {
    await this.client.initialize()
    return this
  }

  async quit() {
    await this.client.destroy()
  }
}
