import { Tabs } from '@mantine/core'

import { type Data, type NewsCategoriesTabsProps } from './types'

function NewsCategoriesTabs<D extends Data>({ data, activeTab, onTabChange, children }: NewsCategoriesTabsProps<D>) {
  return (
    <Tabs value={activeTab} onChange={onTabChange}>
      <Tabs.List grow>
        {data.map(element => <Tabs.Tab key={element.type} value={element.type}>{element.type}</Tabs.Tab>)}
      </Tabs.List>
      {data.map(element => (
        <Tabs.Panel
          key={element.type}
          value={element.type}
        >
          {children({ tabData: element })}
        </Tabs.Panel>)
      )}
    </Tabs>
  )
}

export default NewsCategoriesTabs