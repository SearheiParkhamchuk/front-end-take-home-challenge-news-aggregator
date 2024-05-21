import { Column, CreateDateColumn, Entity } from 'typeorm'

import { type ArticleRemoteSourceMedia } from '../news-sources/@types'

@Entity('article')
export class ArticleEntity {
  @Column({ name: 'uuid', type: 'uuid', primary: true, unique: true, generated: 'uuid' })
    uuid: string

  @Column({ name: 'publishedAt', type: 'date', nullable: false })
    publishedAt: Date

  @CreateDateColumn()
    createdAt: Date

  @Column({ name: 'id', type: 'varchar', length: 200, nullable: true })
    id: string

  @Column({ name: 'description', type: 'text', nullable: true })
    description: string | null

  @Column({ name: 'thumbnail', type: 'text', nullable: true })
    thumbnail?: string

  @Column({ name: 'title', type: 'varchar', length: 200, nullable: false })
    title: string

  @Column({ name: 'source', type: 'simple-json', nullable: false })
    source: { name: string, src: string }

  @Column({ name: 'media', type: 'simple-json', nullable: false })
    media: { images: ArticleRemoteSourceMedia[] }

  @CreateDateColumn({ name: 'expireAt', type: 'date', nullable: false })
    expireAt: Date
}
