import { useEffect } from 'react'

import { lastPageIndicator, pageNumberIndicator, useInfiniteScroll } from './model'
import styles from './styles.module.scss'
import { type InfiniteScrollProps } from './types'

function InfiniteScroll({ reobserveOnChange, children, onLastPage, onPage }: InfiniteScrollProps) {
  const { observeElements } = useInfiniteScroll({
    onPageLastIntersection: onLastPage,
    onPageNumberIntersection: onPage
  })

  useEffect(observeElements, [observeElements, reobserveOnChange])

  return (
    <>
      {children({ page: pageNumberIndicator })}
      <div {...lastPageIndicator()} className={styles['last-page-indicator']} />
    </>
  )
}

export default InfiniteScroll
