import { type CacheClient } from './@types'
import { makeCacheInstance } from './make-cache-instance'

let browserQueryClient: CacheClient | undefined

export function getCacheInstance() {
  if (typeof window === 'undefined') {
    return makeCacheInstance()
  } else {
    if (!browserQueryClient) browserQueryClient = makeCacheInstance()
    return browserQueryClient
  }
}
