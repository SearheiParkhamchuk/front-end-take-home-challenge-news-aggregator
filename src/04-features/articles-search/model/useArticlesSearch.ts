import { useCallback, useOptimistic, useTransition } from 'react';

import { ARTICLES_SEARCH_PARAMS_KEYS } from 'src/05-entities/articles';

import { pickFirstSearchParameter } from 'src/06-shared/lib/third-party/router/pick-first-search-parameter';
import { useSearchParams } from 'src/06-shared/lib/third-party/router/useSearchParams';

export function useArticlesSearch() {
  const [searchParams, { set }] = useSearchParams();
  const searchValue = pickFirstSearchParameter(searchParams, ARTICLES_SEARCH_PARAMS_KEYS.A_QUERY) ?? '';
  const [optimisticValue, setOptimisticValue] = useOptimistic(searchValue);
  const [, startTransition] = useTransition();

  const handleSetValue = useCallback(
    (v: string) => {
      startTransition(() => {
        set({ [ARTICLES_SEARCH_PARAMS_KEYS.A_QUERY]: v });
        setOptimisticValue(v);
      });
    },
    [setOptimisticValue, set],
  );

  return [optimisticValue, handleSetValue] as const;
}
