import { useSearchParams as useNextSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'

import { getUrlWithSearchParams } from './get-url-with-search-params'
import { mergeSearchParams } from './merge-search-params'

type SearchParams<P extends Record<string, string>> = P | ((old: URLSearchParams) => P | URLSearchParams)

export function useSearchParams<P extends Record<string, string>>() {
  const searchParams = useNextSearchParams()
  const _pathname = usePathname()

  const set = useCallback((params: SearchParams<P>) => {
    const p = typeof params === 'function' ? params(new URLSearchParams(window.location.search)) : params
    const merged = mergeSearchParams([new URLSearchParams(window.location.search), new URLSearchParams(p)])
    window.history.pushState({}, '', getUrlWithSearchParams(merged))
  }, [])

  const remove = useCallback((parameter: string) => {
    const p = new URLSearchParams(window.location.search)
    p.delete(parameter)
    window.history.pushState({}, '', getUrlWithSearchParams(p))
  }, [])

  const getFullPath = useCallback((params: Record<string, string> | URLSearchParams) => {
    return `${_pathname}?${mergeSearchParams([searchParams, new URLSearchParams(params)])}`
  }, [_pathname, searchParams])

  return [searchParams, { merge: mergeSearchParams, set, remove, getFullPath }] as const
}
