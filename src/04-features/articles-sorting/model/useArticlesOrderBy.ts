import { useCallback } from 'react';

import { SEARCH_PARAMS_KEYS } from 'src/05-entities/app/model/search-params-keys';
import { pickEnumSearchParameter } from 'src/06-shared/lib/third-party/router/pick-enum-search-parameter';
import { useSearchParams } from 'src/06-shared/lib/third-party/router/useSearchParams';

import { ARTICLES_ORDER_BY } from './index';

const DEFAULT_VIEW = ARTICLES_ORDER_BY.NEWEST;
const key = SEARCH_PARAMS_KEYS.A_ORDER_BY;

export function useArticlesOrderBy() {
  const [searchParams, { set }] = useSearchParams();

  const orderBy = pickEnumSearchParameter(searchParams, ARTICLES_ORDER_BY, key) ?? DEFAULT_VIEW;

  const setOrderBy = useCallback(
    (value: ARTICLES_ORDER_BY) => {
      set({ [key]: value });
    },
    [set],
  );

  return [orderBy, setOrderBy] as const;
}
