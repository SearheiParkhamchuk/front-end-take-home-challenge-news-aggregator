import { useCallback, useEffect } from 'react'

import { useArticlesSearchParams } from '@/05-entities/articles/lib/useArticlesSearchParams'
import { useIntersectionObserver } from '@/06-shared/lib/utils/browser/useIntersectionObserver'

const OBSERVER_OPTIONS = { rootMargin: '0% 0% 100% 0%' }

const pageNumberIndicator = (page: string) => ({ 'data-page-number': page })
const pageLastIndicator = () => ({ 'data-page-last': true })

export function useArticlesObserver({
  onPageLastIntersection,
  onPageNumberIntersection
}: { onPageLastIntersection: () => void, onPageNumberIntersection: (page: string) => void }) {
  const { entries, observe } = useIntersectionObserver(OBSERVER_OPTIONS)
  const [, { set }] = useArticlesSearchParams()

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
  }, [entries, onPageLastIntersection, onPageNumberIntersection, set])

  return { refreshObserveElements: observeElements, pageNumberIndicator, pageLastIndicator }
}
