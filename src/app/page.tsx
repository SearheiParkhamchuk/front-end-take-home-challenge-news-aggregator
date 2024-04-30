import HomePage from '@/02-pages/home/ui/Page'
import { type PageProps } from '@/06-shared/lib/types/PageProps'

export default function Home({ searchParams }: PageProps) {
  const page = Array.isArray(searchParams.page) ? searchParams.page[0] : searchParams.page

  return (
    <HomePage page={page} />
  )
}
