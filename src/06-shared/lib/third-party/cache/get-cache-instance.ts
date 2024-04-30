import { type QueryClient } from '@tanstack/react-query'

import { makeCacheInstance } from './make-cache-instance'

let browserQueryClient: QueryClient | undefined

export function getCacheInstance() {
  if (typeof window === 'undefined') {
    return makeCacheInstance()
  } else {
    if (!browserQueryClient) browserQueryClient = makeCacheInstance()
    return browserQueryClient
  }
}
