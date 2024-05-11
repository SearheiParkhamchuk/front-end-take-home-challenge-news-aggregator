import { useDebouncedCallback } from '@mantine/hooks'
import { useCallback, useState } from 'react'

import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import { pickFirstSearchParameter } from '@/06-shared/lib/third-party/router/pick-first-search-parameter'
import { useSearchParams } from '@/06-shared/lib/third-party/router/useSearchParams'

export function useArticlesSearch() {
  const [searchParams, { set }] = useSearchParams()
  const searchValue = pickFirstSearchParameter(searchParams, SEARCH_PARAMS_KEYS.A_QUERY) ?? ''
  const [value, setValue] = useState(searchValue)

  const setSearchParameter = useDebouncedCallback((v: string) => {
    set({ [SEARCH_PARAMS_KEYS.A_QUERY]: v })
  }, 300)

  const handleSetValue = useCallback((v: string) => {
    setSearchParameter(v)
    setValue(v)
  }, [setSearchParameter])

  return [value, handleSetValue] as const
}
