import HomePage from '@/02-pages/home/ui/Page'
import { type PageProps } from '@/06-shared/lib/types/PageProps'

export default function Home({ searchParams }: PageProps) {
  return (<HomePage searchParams={searchParams} />)
}
