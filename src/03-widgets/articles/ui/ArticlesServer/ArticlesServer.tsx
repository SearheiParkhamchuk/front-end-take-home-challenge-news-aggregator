import Articles from '@/04-features/articles/ui/Articles'
import Alert from '@/06-shared/ui/Alert'

import { fetchArticles } from '../../api/fetch-articles'

async function ArticlesServer({ page, query }: { page?: string, query?: string }) {
  const { articles, errors } = await fetchArticles({ page, query })

  return (
    <>
      {!!errors.length && errors.map((e, index) => <Alert closable key={index} variant='error'>{e.message}</Alert>)}
      <Articles articles={articles} />
    </>
  )
}

export default ArticlesServer
