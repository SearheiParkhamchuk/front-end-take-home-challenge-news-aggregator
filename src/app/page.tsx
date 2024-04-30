import HomePage from '@/02-pages/home/ui/Page'
import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import { pickFirstSearchParameter } from '@/06-shared/lib/third-party/router/pick-first-search-parameter'
import { type PageProps } from '@/06-shared/lib/types/PageProps'

export default function Home({ searchParams }: PageProps) {
  const page = pickFirstSearchParameter(searchParams, SEARCH_PARAMS_KEYS.PAGE)
  const query = pickFirstSearchParameter(searchParams, SEARCH_PARAMS_KEYS.QUERY)

  return (<HomePage page={page} query={query} />)
}
