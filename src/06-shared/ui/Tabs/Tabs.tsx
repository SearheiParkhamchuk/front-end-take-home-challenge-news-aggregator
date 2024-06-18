import { Tabs as MantineTabs } from '@mantine/core'

import { type Item, type TabsProps } from './types'

function Tabs<I extends Item>({ data, value, onChange, renderPanel, renderTab }: TabsProps<I>) {
  return (
    <MantineTabs value={value} onChange={onChange}>
      <MantineTabs.List grow>
        {data.map((element) => (
          <MantineTabs.Tab key={element.value} value={element.value}>
            {renderTab({ element })}
          </MantineTabs.Tab>
        ))}
      </MantineTabs.List>
      {data.map((element) => (
        <MantineTabs.Panel key={element.value} value={element.value} >
          {renderPanel({ element })}
        </MantineTabs.Panel>)
      )}
    </MantineTabs>
  )
}

export default Tabs