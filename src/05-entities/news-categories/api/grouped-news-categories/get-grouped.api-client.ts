import { useSuspenseQuery } from '@tanstack/react-query';

import { getFetcherInstanceClient } from 'src/06-shared/lib/third-party/fetcher/get-fetcher-instance-client';

import { queryOptionsGetter } from './get-grouped.options';
import { groupedNewsCategoriesRequest } from './request';

const requestClient = groupedNewsCategoriesRequest(getFetcherInstanceClient());

export function useGetGrouped() {
  const queryOptions = queryOptionsGetter(requestClient);
  return useSuspenseQuery(queryOptions());
}
