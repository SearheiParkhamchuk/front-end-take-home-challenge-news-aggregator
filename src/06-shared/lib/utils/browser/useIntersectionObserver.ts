import { useCallback, useEffect, useState } from 'react';

export function useIntersectionObserver(init: IntersectionObserverInit) {
  const [observer, setIntersectionObserver] = useState<IntersectionObserver>();
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const [elementsToObserve, setElementsToObserve] = useState<Element[]>([]);

  const unobserve = useCallback(() => {
    observer?.disconnect();
  }, [observer]);

  const observe = useCallback(() => {
    elementsToObserve.forEach((element) => {
      observer?.observe(element);
    });
  }, [elementsToObserve, observer]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(setEntries, init);
    setIntersectionObserver(intersectionObserver);
    return () => {
      intersectionObserver.disconnect();
    };
  }, [init]);

  useEffect(() => {
    if (!observer) return;
    observe();
    return () => {
      unobserve();
    };
  }, [elementsToObserve, observe, observer, unobserve]);

  return { observer, entries, observe: setElementsToObserve, pause: unobserve, resume: observe };
}
