'use client'
import { type ChangeEvent } from 'react'

import { type ARTICLES_ORDER_BY } from 'src/05-entities/articles'
import { withSuspense } from 'src/06-shared/lib/utils/HOK/withSuspense'
import SelectNative from 'src/06-shared/ui/SelectNative'

import { items } from '../../model'
import { useArticlesOrderBy } from '../../model/useArticlesOrderBy'

function ArticlesOrderBy() {
  const [orderBy, setOrderBy] = useArticlesOrderBy()

  const handleOrderByChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(event.target.value as ARTICLES_ORDER_BY)
  }

  return <SelectNative data={items} size='xs' value={orderBy} onChange={handleOrderByChange} />
}

export default withSuspense(ArticlesOrderBy)
