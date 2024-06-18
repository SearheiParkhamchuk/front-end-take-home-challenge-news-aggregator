import { useEffect } from 'react'

import { lastPageIndicator, useInfiniteScroll } from './model'
import styles from './styles.module.scss'
import { type InfiniteScrollProps } from './types'

function InfiniteScroll({ children, disabled, onLastPage, onPage }: InfiniteScrollProps) {
  const { observeElements } = useInfiniteScroll({
    onPageLastIntersection: onLastPage,
    onPageNumberIntersection: onPage,
    disabled
  })

  useEffect(observeElements, [observeElements, children])

  return (
    <>
      {children}
      <div {...lastPageIndicator()} className={styles['last-page-indicator']} />
    </>
  )
}

export default InfiniteScroll
