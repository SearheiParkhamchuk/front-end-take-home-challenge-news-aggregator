import Articles from '@/04-features/articles/ui/Articles'
import Alert from '@/06-shared/ui/Alert'

import { type ArticlesServerProps } from './types'
import { fetchArticles } from '../../api/fetch-articles'

async function ArticlesServer({ page, query }: ArticlesServerProps) {
  const { articles, errors } = await fetchArticles({ page, query, pageSize: 10 })

  return (
    <>
      {!!errors.length && errors.map((e, index) => <Alert closable key={index} variant='error'>{e.message}</Alert>)}
      <Articles articles={articles} />
    </>
  )
}

export default ArticlesServer
