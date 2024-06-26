import { useCallback, useEffect } from 'react';

import { useIntersectionObserver } from 'src/06-shared/lib/utils/browser/useIntersectionObserver';

const OBSERVER_OPTIONS = { rootMargin: '0% 0% 50% 0%' };

export const pageNumberIndicator = (page: string) => ({ 'data-page-number': page });
export const lastPageIndicator = () => ({ 'data-page-last': true });

export function useInfiniteScroll({
  onPageLastIntersection,
  onPageNumberIntersection,
  disabled,
}: {
  onPageLastIntersection: () => void;
  onPageNumberIntersection: (page: string) => void;
  disabled?: boolean;
}) {
  const { entries, observe, pause, resume } = useIntersectionObserver(OBSERVER_OPTIONS);

  const observeElements = useCallback(() => {
    const pageNumberAnchorElements = document.querySelectorAll('[data-page-number]');
    const pageLastAnchorElements = document.querySelectorAll('[data-page-last]');
    observe([...Array.from(pageLastAnchorElements), ...Array.from(pageNumberAnchorElements)]);
  }, [observe]);

  useEffect(observeElements, [observeElements]);

  useEffect(() => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      if (!(target instanceof HTMLElement)) return;
      const { pageLast, pageNumber } = target.dataset;

      if (pageNumber && !isNaN(Number(pageNumber))) onPageNumberIntersection(pageNumber);
      if (pageLast) onPageLastIntersection();
    });
  }, [entries, onPageLastIntersection, onPageNumberIntersection]);

  useEffect(() => {
    if (disabled) pause();
    else resume();
  }, [disabled, pause, resume]);

  return { observeElements };
}
