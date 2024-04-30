'use client'
import { useSearchParams } from 'next/navigation'

import { type ChangeEvent, useDeferredValue, useEffect, useState } from 'react'

import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import { useRouter } from '@/06-shared/lib/third-party/router/useRouter'
import InputSearch from '@/06-shared/ui/InputSearch'

function AppSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [query, setQuery] = useState<string>(searchParams.get(SEARCH_PARAMS_KEYS.QUERY) ?? '')
  const defferedQuery = useDeferredValue<string>(query)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    router.push({ params: { [SEARCH_PARAMS_KEYS.QUERY]: defferedQuery } }, { preserveSearchParams: true })
    router.refresh()
  }, [defferedQuery, router])

  return <InputSearch label='Search' value={query} onChange={handleChange} />
}

export default AppSearch
