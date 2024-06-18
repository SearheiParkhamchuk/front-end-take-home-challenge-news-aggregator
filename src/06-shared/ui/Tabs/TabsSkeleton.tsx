import { Tabs } from '@mantine/core'
import { type PropsWithChildren } from 'react'

import Skeleton from 'src/06-shared/ui/Skeleton'

const data = new Array(3).fill(null).map((_, index) => ({ value: index.toString() }))

function TabsSkeleton({ children }: PropsWithChildren<{}>) {
  return (
    <Tabs defaultValue={data[0].value}>
      <Tabs.List grow>
        {data.map((e) => <Tabs.Tab key={e.value} value={e.value}><Skeleton height={32} width={150} /></Tabs.Tab>)}
      </Tabs.List>
      {data.map((e) => (
        <Tabs.Panel key={e.value} value={e.value} >
          {children}
        </Tabs.Panel>)
      )}
    </Tabs>
  )
}

export default TabsSkeleton