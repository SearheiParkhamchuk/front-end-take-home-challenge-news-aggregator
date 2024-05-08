import { type FetcherInstance } from './@types'
import { makeFetcherInstance } from './maket-fetcher-instance'

let fetcherInstance: FetcherInstance | undefined

export function getFetcherInstance() {
  if (typeof window === 'undefined') {
    return makeFetcherInstance()
  } else {
    if (!fetcherInstance) fetcherInstance = makeFetcherInstance()
    return fetcherInstance
  }
}
