import { useSearchParams as useNextSearchParams, usePathname } from 'next/navigation';
import { useCallback } from 'react';

import { getUrlWithSearchParams } from './get-url-with-search-params';
import { mergeSearchParams } from './merge-search-params';

type SearchParams = Record<string, string>;

export function useSearchParams() {
  const searchParams = useNextSearchParams();
  const _pathname = usePathname();

  const set = useCallback((params: SearchParams) => {
    const merged = mergeSearchParams([new URLSearchParams(window.location.search), new URLSearchParams(params)]);
    window.history.pushState({}, '', getUrlWithSearchParams(merged));
  }, []);

  const setArray = useCallback((name: string, value: string[]) => {
    const p = new URLSearchParams();
    p.append(name, value.join(','));

    const merged = mergeSearchParams([new URLSearchParams(window.location.search), new URLSearchParams(p)]);
    window.history.pushState({}, '', getUrlWithSearchParams(merged));
  }, []);

  const remove = useCallback((parameter: string) => {
    const p = new URLSearchParams(window.location.search);
    p.delete(parameter);
    window.history.pushState({}, '', getUrlWithSearchParams(p));
  }, []);

  const getFullPath = useCallback(
    (params: Record<string, string> | URLSearchParams) => {
      return `${_pathname}?${mergeSearchParams([searchParams, new URLSearchParams(params)])}`;
    },
    [_pathname, searchParams],
  );

  return [searchParams, { merge: mergeSearchParams, set, setArray, remove, getFullPath }] as const;
}
