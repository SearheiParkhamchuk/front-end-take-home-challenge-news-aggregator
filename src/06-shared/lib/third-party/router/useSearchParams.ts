import { useSearchParams as useNextSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'

import { getSearchParams } from './get-search-params'
import { mergeSearchParams } from './merge-search-params'

type SearchParams<P extends Record<string, string>> = P | ((old: URLSearchParams) => P | URLSearchParams)

export function useSearchParams<P extends Record<string, string>>() {
  const searchParams = useNextSearchParams()
  const _pathname = usePathname()

  const set = useCallback((params: SearchParams<P>) => {
    const p = typeof params === 'function' ? params(new URLSearchParams(window.location.search)) : params
    window.history.pushState({}, '', getSearchParams(p))
  },
  []
  )

  const getFullPath = useCallback((params: Record<string, string> | URLSearchParams) => {
    return `${_pathname}?${mergeSearchParams([searchParams, new URLSearchParams(params)])}`
  }, [_pathname, searchParams])

  return [searchParams, { merge: mergeSearchParams, set, getFullPath }] as const
}
