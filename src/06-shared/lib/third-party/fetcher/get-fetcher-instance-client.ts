import { type FetcherConfig } from './@types';
import { getFetcherInstance } from './get-fetcher-instance';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const defaultConfig: FetcherConfig = { baseURL };

export function getFetcherInstanceClient() {
  return getFetcherInstance(defaultConfig);
}
