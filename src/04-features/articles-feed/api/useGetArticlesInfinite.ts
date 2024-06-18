import { articlesModel } from 'src/05-entities/articles';
import { articlesClientApi } from 'src/05-entities/articles/index.client';
import { useSearchParams } from 'src/06-shared/lib/third-party/router/useSearchParams';

export function useGetArticlesInfinite() {
  const [searchParams] = useSearchParams();
  const articlesParams = articlesModel.getArticlesQueryParams(searchParams);

  return articlesClientApi.useGetArticlesInfinite(articlesParams);
}
