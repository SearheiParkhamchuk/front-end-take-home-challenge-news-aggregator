'use server'
import Articles from '@/04-features/articles/ui/Articles'
import Alert from '@/06-shared/ui/Alert'

import Stack from '@/06-shared/ui/Stack'

import { fetchArticles } from '../../api/fetch-articles'
import { mergeArticles } from '../../lib/merge-articles'
import { mergeArticlesErrors } from '../../lib/merge-articles-errors'

async function ArticlesServer({ page, query }: { page?: string, query?: string }) {
  const response = await fetchArticles({ page, query })

  const articles = mergeArticles(response)
  const errors = mergeArticlesErrors(response)

  return (
    <Stack>
      {!!errors.length && errors.map((e, index) => <Alert closable key={index} variant='error'>{e.message}</Alert>)}
      <Articles articles={articles} />
    </Stack>
  )
}

export default ArticlesServer
