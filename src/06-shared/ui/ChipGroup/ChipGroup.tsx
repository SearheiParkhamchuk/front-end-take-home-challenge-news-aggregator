import { ChipGroup as MantineChipGroup } from '@mantine/core'

import { type ChipProps } from './types'

function ChipGroup({ children, value, onChange }: ChipProps) {
  return (
    <MantineChipGroup<true>
      multiple
      value={value}
      onChange={onChange}
    >
      {children}
    </MantineChipGroup>
  )
}

export default ChipGroup