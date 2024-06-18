import { pickArraySearchParameter } from 'src/06-shared/lib/third-party/router/pick-array-search-parameter';
import { useSearchParams } from 'src/06-shared/lib/third-party/router/useSearchParams';

import { NEWS_CATEGORIES_SEARCH_PARAMS } from '../../model/enums/news-categories-search-params';

export function useGetSelected() {
  const [searchParams] = useSearchParams();
  const categories = pickArraySearchParameter(searchParams, NEWS_CATEGORIES_SEARCH_PARAMS.NEWS_CATEGORIES);

  return { data: categories };
}
