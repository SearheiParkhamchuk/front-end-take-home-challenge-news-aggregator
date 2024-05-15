'use client'
import { type ChangeEvent } from 'react'

import SelectNative from '@/06-shared/ui/SelectNative'

import { type ARTICLES_ORDER_BY, items } from '../../model'
import { useArticlesOrderBy } from '../../model/useArticlesOrderBy'

function ArticlesSelectOrderBy() {
  const [orderBy, setOrderBy] = useArticlesOrderBy()

  const handleOrderByChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(event.target.value as ARTICLES_ORDER_BY)
  }

  return <SelectNative data={items} value={orderBy} onChange={handleOrderByChange} />
}

export default ArticlesSelectOrderBy
