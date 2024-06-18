import { z } from 'zod';

import { useDataPersister } from 'src/06-shared/lib/third-party/persisting-data/data-persister';

const schema = z.object({
  tabs: z.object({
    active: z.string().nullable(),
  }),
});

export type State = z.infer<typeof schema>;

const defaultState = {
  tabs: {
    active: null,
  },
};

export function useNewsCategoriesDataPersister() {
  return useDataPersister<State>({ key: 'app.news-categories', schema, defaultState });
}
