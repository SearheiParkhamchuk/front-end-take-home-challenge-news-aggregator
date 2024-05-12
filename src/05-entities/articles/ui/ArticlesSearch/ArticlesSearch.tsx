'use client'
import { type ChangeEvent } from 'react'

import { withSuspense } from '@/06-shared/lib/utils/HOK/withSuspense'
import InputSearch from '@/06-shared/ui/InputSearch'

import { useArticlesSearch } from '../../lib/useArticlesSearch'

function ArticlesSearch() {
  const [query, setSearchQuery] = useArticlesSearch()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return <InputSearch value={query} onChange={handleChange} />
}

export default withSuspense(ArticlesSearch)
