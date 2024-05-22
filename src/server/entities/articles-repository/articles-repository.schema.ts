import { Column, Entity } from 'typeorm'

import { type ArticleRemoteSourceMedia } from '../news-sources/@types'

@Entity('article')
export class ArticleEntity {
  @Column({ name: 'uuid', type: 'uuid', primary: true, unique: true, generated: 'uuid' })
    uuid: string

  @Column({ name: 'published_at', type: 'timestamp', nullable: false })
    published_at: Date

  @Column({ name: 'created_at', type: 'timestamp', default: 'now()', nullable: false })
    created_at: Date

  @Column({ name: 'id', type: 'varchar', length: 512, nullable: true })
    id: string

  @Column({ name: 'description', type: 'text', nullable: true })
    description: string | null

  @Column({ name: 'thumbnail', type: 'text', nullable: true })
    thumbnail?: string

  @Column({ name: 'title', type: 'varchar', length: 256, nullable: false })
    title: string

  @Column({ name: 'source', type: 'varchar', length: 512, nullable: false, unique: true })
    source: string

  @Column({ name: 'source_name', type: 'varchar', length: 128, nullable: false })
    source_name: string

  @Column({ name: 'media', type: 'simple-json', nullable: false })
    media: { images: ArticleRemoteSourceMedia[] }

  @Column({ name: 'expire_at', type: 'timestamp', nullable: false })
    expire_at: Date
}
