import merge from 'lodash/merge';
import { useCallback } from 'react';

import { type State, useNewsCategoriesDataPersister } from './news-categories-data-persister';

export function useSetPersistedState() {
  const [, setAppState] = useNewsCategoriesDataPersister();

  const mutate = useCallback(
    (partialState: State) => {
      setAppState((previous) => merge({}, previous, partialState));
    },
    [setAppState],
  );

  return { mutate };
}
