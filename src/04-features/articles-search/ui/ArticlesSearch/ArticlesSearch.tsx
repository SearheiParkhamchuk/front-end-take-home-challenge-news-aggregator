'use client'
import { type ChangeEvent } from 'react'

import { withSuspense } from 'src/06-shared/lib/utils/HOK/withSuspense'
import InputSearch from 'src/06-shared/ui/InputSearch'

import { useArticlesSearch } from '../../model/useArticlesSearch'

function ArticlesSearch() {
  const [query, setSearchQuery] = useArticlesSearch()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return <InputSearch size='xs' value={query} onChange={handleChange} />
}

export default withSuspense(ArticlesSearch)
