import { useCallback, useOptimistic, useTransition } from 'react'

import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/model/search-params-keys'
import { pickFirstSearchParameter } from '@/06-shared/lib/third-party/router/pick-first-search-parameter'
import { useSearchParams } from '@/06-shared/lib/third-party/router/useSearchParams'

export function useArticlesSearch() {
  const [searchParams, { set }] = useSearchParams()
  const searchValue = pickFirstSearchParameter(searchParams, SEARCH_PARAMS_KEYS.A_QUERY) ?? ''
  const [optimisticValue, setOptimisticValue] = useOptimistic(searchValue)
  const [,startTransition] = useTransition()

  const handleSetValue = useCallback((v: string) => {
    startTransition(() => {
      set({ [SEARCH_PARAMS_KEYS.A_QUERY]: v })
      setOptimisticValue(v)
    })
  }, [setOptimisticValue, set])

  return [optimisticValue, handleSetValue] as const
}
