'use client'
import { QueryClientProvider } from '@tanstack/react-query'
import { type PropsWithChildren } from 'react'

import { getCacheInstance } from '@/06-shared/lib/third-party/cache/get-cache-instance'

export default function CacheProvider({ children }: PropsWithChildren<{}>) {
  return (<QueryClientProvider client={getCacheInstance()}>{children}</QueryClientProvider>)
}
