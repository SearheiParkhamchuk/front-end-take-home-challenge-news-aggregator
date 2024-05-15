import { useCallback, useEffect } from 'react'

import { useIntersectionObserver } from '@/06-shared/lib/utils/browser/useIntersectionObserver'

const OBSERVER_OPTIONS = { rootMargin: '0% 0% 100% 0%' }

export const pageNumberIndicator = (page: string) => ({ 'data-page-number': page })
export const lastPageIndicator = () => ({ 'data-page-last': true })

export function useInfiniteScroll({
  onPageLastIntersection,
  onPageNumberIntersection
}: { onPageLastIntersection: () => void, onPageNumberIntersection: (page: string) => void }) {
  const { entries, observe } = useIntersectionObserver(OBSERVER_OPTIONS)

  const observeElements = useCallback(() => {
    const pageNumberAnchorElements = document.querySelectorAll('[data-page-number]')
    const pageLastAnchorElements = document.querySelectorAll('[data-page-last]')
    observe([...Array.from(pageLastAnchorElements), ...Array.from(pageNumberAnchorElements)])
  }, [observe])

  useEffect(observeElements, [observeElements])

  useEffect(() => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return
      if (!(target instanceof HTMLElement)) return
      const { pageLast, pageNumber } = target.dataset

      if (pageNumber && !isNaN(Number(pageNumber))) onPageNumberIntersection(pageNumber)
      if (pageLast) onPageLastIntersection()
    })
  }, [entries, onPageLastIntersection, onPageNumberIntersection])

  return { observeElements }
}
