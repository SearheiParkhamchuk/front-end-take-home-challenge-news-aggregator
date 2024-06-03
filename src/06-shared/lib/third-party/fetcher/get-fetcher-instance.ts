import { type FetcherConfig, type FetcherInstance } from './@types';
import { makeFetcherInstance } from './maket-fetcher-instance';

let fetcherInstance: FetcherInstance | undefined;

export function getFetcherInstance(config: FetcherConfig) {
  if (typeof window === 'undefined') {
    return makeFetcherInstance(config);
  } else {
    if (!fetcherInstance) fetcherInstance = makeFetcherInstance(config);
    return fetcherInstance;
  }
}
