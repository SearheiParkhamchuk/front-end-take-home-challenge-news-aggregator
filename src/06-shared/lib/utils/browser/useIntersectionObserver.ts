import { useEffect, useState } from 'react'

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [observer, setIntersectionObserver] = useState<IntersectionObserver>()
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([])
  const [elementsToObserve, setElementsToObserve] = useState<Element[]>([])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(setEntries, options)
    setIntersectionObserver(intersectionObserver)
    return () => { intersectionObserver.disconnect() }
  }, [options])

  useEffect(() => {
    if (!observer) return
    elementsToObserve.forEach(e => { observer.observe(e) })
  }, [elementsToObserve, observer])

  return { observer, entries, observe: setElementsToObserve }
}
