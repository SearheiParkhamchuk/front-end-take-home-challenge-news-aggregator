import Article from '@/05-entities/articles/ui/Article'
import ArticlesGrid from '@/05-entities/articles/ui/ArticlesGrid'

import { type ArticlesProps } from './types'

const alt = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laborum!'
const src = `
  https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?
  q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
`

const publishedAt = new Date()
const title = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laborum!'
const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Tenetur, assumenda sapiente beatae eum deleniti magnam excepturi pariatur consectetur aliquam facilis?`

function Articles({ ...rest }: ArticlesProps) {
  return (
    <ArticlesGrid {...rest}>
      <Article alt={alt} description={description} publishedAt={publishedAt} src={src} title={title} />
      <Article alt={alt} description={description} publishedAt={publishedAt} src={src} title={title} />
      <Article alt={alt} description={description} publishedAt={publishedAt} src={src} title={title} />
      <Article alt={alt} description={description} publishedAt={publishedAt} src={src} title={title} />
      <Article alt={alt} description={description} publishedAt={publishedAt} src={src} title={title} />
      <Article alt={alt} description={description} publishedAt={publishedAt} src={src} title={title} />
      <Article alt={alt} description={description} publishedAt={publishedAt} src={src} title={title} />
      <Article alt={alt} description={description} publishedAt={publishedAt} src={src} title={title} />
      <Article alt={alt} description={description} publishedAt={publishedAt} src={src} title={title} />
      <Article alt={alt} description={description} publishedAt={publishedAt} src={src} title={title} />
      <Article alt={alt} description={description} publishedAt={publishedAt} src={src} title={title} />
      <Article alt={alt} description={description} publishedAt={publishedAt} src={src} title={title} />
      <Article alt={alt} description={description} publishedAt={publishedAt} src={src} title={title} />
      <Article alt={alt} description={description} publishedAt={publishedAt} src={src} title={title} />
      <Article alt={alt} description={description} publishedAt={publishedAt} src={src} title={title} />
    </ArticlesGrid>
  )
}

export default Articles
