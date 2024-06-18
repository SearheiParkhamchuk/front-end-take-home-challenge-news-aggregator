import HomePage from 'src/02-pages/feed/ui/Page'
import HomePageStructuredData from 'src/02-pages/feed/ui/PageStructuredData'
import { articlesModel } from 'src/05-entities/articles'
import { type PageProps } from 'src/06-shared/lib/types/PageProps'

export default function Home({ searchParams }: PageProps) {
  return (
    <>
      <HomePageStructuredData searchParams={articlesModel.getArticlesQueryParams(searchParams)} />
      <HomePage searchParams={searchParams} />
    </>
  )
}
