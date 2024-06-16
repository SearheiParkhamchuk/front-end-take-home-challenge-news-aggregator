import { useCallback } from 'react';

import { useSearchParams } from 'src/06-shared/lib/third-party/router/useSearchParams';

import { NEWS_CATEGORIES_SEARCH_PARAMS } from '../../model/enums/news-categories-search-params';

export function useSetSelected() {
  const [, { setArray }] = useSearchParams();

  const mutate = useCallback(
    async (selected: string[]) => {
      setArray(NEWS_CATEGORIES_SEARCH_PARAMS.NEWS_CATEGORIES, selected);
    },
    [setArray],
  );

  return { mutate };
}
