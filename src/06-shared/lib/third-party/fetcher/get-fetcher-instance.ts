import { type FetcherConfig, type FetcherInstance } from './@types'
import { makeFetcherInstance } from './maket-fetcher-instance'

let fetcherInstance: FetcherInstance | undefined
const defaultConfig: FetcherConfig = {
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_URL
}

export function getFetcherInstance(config: FetcherConfig = defaultConfig) {
  if (typeof window === 'undefined') {
    return makeFetcherInstance(config)
  } else {
    if (!fetcherInstance) fetcherInstance = makeFetcherInstance(config)
    return fetcherInstance
  }
}
