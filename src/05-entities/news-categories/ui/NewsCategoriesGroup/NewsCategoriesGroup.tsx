import Chip from 'src/06-shared/ui/Chip'
import ChipGroup from 'src/06-shared/ui/ChipGroup'
import Group from 'src/06-shared/ui/Group'

import { type Data, type NewsCategoriesGroupProps } from './types'

function NewsCategoriesGroup<E extends Data>({ value, data, onChange }: NewsCategoriesGroupProps<E>) {
  return (
    <ChipGroup value={value} onChange={onChange}>
      <Group padding='sm'>
        {data.map(category => (
          <Chip
            key={category.uuid}
            size='lg'
            value={category.uuid}
            variant='outline'
          >
            {category.name}
          </Chip>
        ))}
      </Group>
    </ChipGroup>
  )
}

export default NewsCategoriesGroup