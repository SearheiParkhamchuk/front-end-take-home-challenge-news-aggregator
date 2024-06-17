'use client'
import { useCallback } from 'react'

import { newsCategoriesClientApi } from 'src/05-entities/news-categories/index.client'
import { NewsCategoriesGroup, NewsCategoriesGroupSkeleton, NewsCategoriesTabs } from 'src/05-entities/news-categories/index.ui'

import { withSuspense } from 'src/06-shared/lib/utils/HOK/withSuspense'
import TabsSkeleton from 'src/06-shared/ui/Tabs/TabsSkeleton'

function NewsCategories() {
  const { data: groupedCategories } = newsCategoriesClientApi.useGetGrouped()
  const { data: selectedCategories } = newsCategoriesClientApi.useGetSelected()
  const { data: state } = newsCategoriesClientApi.useGetPersistedState()

  const { mutate: setPersistedState } = newsCategoriesClientApi.useSetPersistedState()
  const { mutate: setSelected } = newsCategoriesClientApi.useSetSelected()

  const selectedSet = new Set(selectedCategories)
  const defaultActiveTab = groupedCategories.data[0].type

  const groupedSelectedCategories = groupedCategories.data.map((element) => {
    return { ...element, value: element.type, selected: element.grouped.filter(g => selectedSet.has(g.uuid)).length }
  })

  const setActiveTab = useCallback((value: string | null) => {
    setPersistedState({ tabs: { active: value } })
  }, [setPersistedState])

  return (
    <NewsCategoriesTabs
      activeTab={state.tabs.active ?? defaultActiveTab}
      data={groupedSelectedCategories}
      renderPanel={({ element }) => (
        <NewsCategoriesGroup
          data={element.grouped}
          value={selectedCategories}
          onChange={setSelected}
        />
      )}
      onTabChange={setActiveTab}
    />
  )
}

export default withSuspense(
  NewsCategories, {
  fallback: (<TabsSkeleton><NewsCategoriesGroupSkeleton /></TabsSkeleton>)
})