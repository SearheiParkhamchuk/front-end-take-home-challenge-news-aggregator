import { usePrevious } from '@mantine/hooks'
import { useLayoutEffect } from 'react'

import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import { queryKeyInfinite } from '@/05-entities/articles/api/all-articles/client-api/query-cache-options-getter-infinite'
import { useArticlesSearchParams } from '@/05-entities/articles/lib/useArticlesSearchParams'
import { useClearCache } from '@/06-shared/lib/third-party/cache/useClearCache'

export function useClearArticlesCache(): void {
  const clearCache = useClearCache()
  const [searchParams, { set }] = useArticlesSearchParams()

  const currentValue = JSON.stringify([searchParams.a_query, searchParams.pageSize])
  const previousValue = usePrevious(currentValue)
  const enabled = previousValue !== undefined && currentValue !== previousValue && searchParams[SEARCH_PARAMS_KEYS.A_PAGE] !== '1'

  useLayoutEffect(() => {
    if (enabled) {
      clearCache({ queryKey: queryKeyInfinite(), fetchStatus: 'idle' })
      set({ [SEARCH_PARAMS_KEYS.A_PAGE]: '1' })
    }
  }, [clearCache, set, enabled, searchParams.a_query, searchParams.pageSize])
}
