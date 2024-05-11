import { useSearchParams as useNextSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'

export function useSearchParams() {
  const _searchParams = useNextSearchParams()
  const _pathname = usePathname()

  const merge = useCallback((params: URLSearchParams) => {
    const newSearchParams = new URLSearchParams(_searchParams)

    Array.from(params.entries()).forEach(([key, value]) => { newSearchParams.set(key, value) })
    return newSearchParams
  }, [_searchParams])

  const set = useCallback((params: Record<string, string>) => {
    const searchParams = merge(new URLSearchParams(params))
    window.history.pushState({}, '', `${_pathname}?${searchParams.toString()}`)
  }, [_pathname, merge])

  return [_searchParams, { merge, set }] as const
}
