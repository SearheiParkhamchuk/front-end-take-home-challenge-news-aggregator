import { useSearchParams as useNextSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export function useSearchParams() {
  const _searchParams = useNextSearchParams()

  const merge = useCallback((params: URLSearchParams) => {
    const newSearchParams = new URLSearchParams(_searchParams)

    Array.from(params.entries()).forEach(([key, value]) => { newSearchParams.set(key, value) })
    return newSearchParams
  }, [_searchParams])

  return [_searchParams, { merge }] as const
}
