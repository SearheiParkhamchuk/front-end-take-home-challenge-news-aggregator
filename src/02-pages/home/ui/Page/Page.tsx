'use server'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import ArticlesFeed from 'src/03-widgets/articles/ui/ArticlesFeed'
import ArticlesTopPanel from 'src/03-widgets/articles/ui/ArticlesTopPanel'

import { getArticlesQueryParams } from 'src/04-features/articles/model/get-articles-query-params'

import { articlesServerApi } from 'src/05-entities/articles/index.server'

import Stack from 'src/06-shared/ui/Stack'

import styles from './styles.module.scss'
import { type PageProps } from './types'

async function HomePage({ searchParams }: PageProps) {
  const { cache } = await articlesServerApi.getArticlesInfinite(getArticlesQueryParams(searchParams))

  return (
    <HydrationBoundary state={dehydrate(cache)}>
      <Stack className={styles.container}>
        <ArticlesTopPanel />
        <ArticlesFeed />
      </Stack>
    </HydrationBoundary>
  )
}

export default HomePage
