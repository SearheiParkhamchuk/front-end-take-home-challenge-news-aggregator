import { type FetcherConfig } from './@types';
import { getFetcherInstance } from './get-fetcher-instance';

const defaultConfig: FetcherConfig = { baseURL: process.env.NEXT_SERVER_API_BASE_URL };

export function getFetcherInstanceServer() {
  return getFetcherInstance(defaultConfig);
}
