import { useNewsCategoriesDataPersister } from './news-categories-data-persister';

export function useGetPersistedState() {
  const [state] = useNewsCategoriesDataPersister();

  return { data: state };
}
