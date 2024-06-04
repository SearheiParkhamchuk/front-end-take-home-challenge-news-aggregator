import HomePage from 'src/02-pages/home/ui/Page'
import { type PageProps } from 'src/06-shared/lib/types/PageProps'

export default function Home({ searchParams }: PageProps) {
  return (<HomePage searchParams={searchParams} />)
}
