'use client'
import { type ChangeEvent } from 'react'

import InputSearch from '@/06-shared/ui/InputSearch'

import { useArticlesSearch } from '../../lib/useArticlesSearch'

function AppSearch() {
  const [query, setSearchQuery] = useArticlesSearch()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return <InputSearch value={query} onChange={handleChange} />
}

export default AppSearch
