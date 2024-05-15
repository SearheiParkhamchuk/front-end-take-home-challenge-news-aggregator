import { usePrevious } from '@mantine/hooks'
import { useLayoutEffect } from 'react'

import { queryKeyInfinite } from '@/04-features/articles/api/news-sources/all-articles/client-api/query-cache-options-getter-infinite'
import { useArticlesSearchParams } from '@/04-features/articles/model/useArticlesSearchParams'
import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/model/search-params-keys'
import { useClearCache } from '@/06-shared/lib/third-party/cache/useClearCache'

import { ARTICLES_DEFAULT_PAGE } from '../model/default-page'

export function useClearArticlesCache(): void {
  const clearCache = useClearCache()
  const [searchParams, { set }] = useArticlesSearchParams()

  const currentValue = JSON.stringify([searchParams.a_query, searchParams.a_page_size, searchParams.a_order_by])
  const previousValue = usePrevious(currentValue)
  const enabled =
    previousValue !== undefined &&
    currentValue !== previousValue &&
    searchParams[SEARCH_PARAMS_KEYS.A_PAGE] !== ARTICLES_DEFAULT_PAGE

  useLayoutEffect(() => {
    if (enabled) {
      clearCache({ queryKey: queryKeyInfinite(), fetchStatus: 'idle' })
      set({ [SEARCH_PARAMS_KEYS.A_PAGE]: ARTICLES_DEFAULT_PAGE })
    }
  }, [clearCache, set, enabled, searchParams.a_query, searchParams.a_page_size])
}
