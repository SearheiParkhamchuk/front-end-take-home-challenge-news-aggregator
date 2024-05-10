import HomePage from '@/02-pages/home/ui/Page'
import { getArticlesQueryParams } from '@/04-features/articles/lib/get-articles-query-params'
import { type PageProps } from '@/06-shared/lib/types/PageProps'

export default function Home({ searchParams }: PageProps) {
  const { page, query } = getArticlesQueryParams(searchParams)
  return (<HomePage page={page} query={query} />)
}
