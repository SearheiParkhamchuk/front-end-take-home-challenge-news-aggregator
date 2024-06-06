import { type Metadata } from 'next'

import { generateHomePageMetadata } from 'src/02-pages/home/api/generate-home-page-metadata'
import HomePage from 'src/02-pages/home/ui/Page'
import HomePageStructuredData from 'src/02-pages/home/ui/PageStructuredData'
import { getArticlesQueryParams } from 'src/04-features/articles/model/get-articles-query-params'
import { type PageProps } from 'src/06-shared/lib/types/PageProps'

export async function generateMetadata(): Promise<Metadata> {
  return generateHomePageMetadata()
}

export default function Home({ searchParams }: PageProps) {
  return (
    <>
      <HomePageStructuredData searchParams={getArticlesQueryParams(searchParams)} />
      <HomePage searchParams={searchParams} />
    </>
  )
}
