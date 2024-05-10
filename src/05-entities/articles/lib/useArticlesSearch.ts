import { useState } from 'react'

import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import { pickFirstSearchParameter } from '@/06-shared/lib/third-party/router/pick-first-search-parameter'
import { useRouter } from '@/06-shared/lib/third-party/router/useRouter'
import { useSearchParams } from '@/06-shared/lib/third-party/router/useSearchParams'
import { useDebouncedEffect } from '@/06-shared/lib/utils/hooks/useDebouncedEffect'

export function useArticlesSearch() {
  const router = useRouter()
  const [searchParams] = useSearchParams()
  const searchValue = pickFirstSearchParameter(searchParams, SEARCH_PARAMS_KEYS.ARTICLES_QUERY) ?? ''
  const [value, setValue] = useState(searchValue)

  useDebouncedEffect(() => {
    router.push(
      { params: { [SEARCH_PARAMS_KEYS.ARTICLES_QUERY]: value } },
      { preserveSearchParams: true }
    )
  }, [value, router])

  return [value, setValue] as const
}
