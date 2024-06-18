import { Indicator } from '@mantine/core'

import Tabs from 'src/06-shared/ui/Tabs'
import Text from 'src/06-shared/ui/Text'

import styles from './styles.module.scss'
import { type Data, type NewsCategoriesTabsProps } from './types'

function NewsCategoriesTabs<D extends Data>({ data, activeTab, onTabChange, renderPanel }: NewsCategoriesTabsProps<D>) {
  return (
    <Tabs
      data={data}
      renderPanel={renderPanel}
      renderTab={({ element }) => (
        <Indicator disabled={!element.selected} label={element.selected} offset={-3} size={13}>
          <Text className={styles.label}>{element.value}</Text>
        </Indicator>
      )}
      value={activeTab}
      onChange={onTabChange}
    />
  )
}

export default NewsCategoriesTabs