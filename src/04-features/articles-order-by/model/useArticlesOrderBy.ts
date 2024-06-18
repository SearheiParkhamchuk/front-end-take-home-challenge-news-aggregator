import { useCallback } from 'react';

import { ARTICLES_ORDER_BY, ARTICLES_SEARCH_PARAMS_KEYS } from 'src/05-entities/articles';
import { pickEnumSearchParameter } from 'src/06-shared/lib/third-party/router/pick-enum-search-parameter';
import { useSearchParams } from 'src/06-shared/lib/third-party/router/useSearchParams';

const DEFAULT_VIEW = ARTICLES_ORDER_BY.NEWEST;

export function useArticlesOrderBy() {
  const [searchParams, { set }] = useSearchParams();

  const orderBy = pickEnumSearchParameter(searchParams, ARTICLES_ORDER_BY, ARTICLES_SEARCH_PARAMS_KEYS.A_ORDER_BY) ?? DEFAULT_VIEW;

  const setOrderBy = useCallback(
    (value: ARTICLES_ORDER_BY) => {
      set({ [ARTICLES_SEARCH_PARAMS_KEYS.A_ORDER_BY]: value });
    },
    [set],
  );

  return [orderBy, setOrderBy] as const;
}
