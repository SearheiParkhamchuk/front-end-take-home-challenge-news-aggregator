import { type NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter as useNextRouter, usePathname } from 'next/navigation'
import { useCallback, useMemo } from 'react'

import { useSearchParams } from './useSearchParams'

export function useRouter() {
  const _router = useNextRouter()
  const _pathname = usePathname()
  const [, { merge }] = useSearchParams()

  const push = useCallback((
    href: string | { params?: Record<string, string>, pathname?: string },
    options?: NavigateOptions & { preserveSearchParams: boolean }
  ) => {
    if (typeof href === 'string') {
      _router.push(href, options)
      return
    }

    const pathname = href.pathname ?? _pathname
    const params = new URLSearchParams(href.params)
    const searchParams = options?.preserveSearchParams ? merge(params) : params

    _router.push(`${pathname}?${searchParams.toString()}`, options)
  }, [_pathname, _router, merge])

  return useMemo(() => ({
    push,
    refresh: _router.refresh.bind(_router)
  }), [_router, push])
}
