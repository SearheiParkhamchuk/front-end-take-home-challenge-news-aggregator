import { random } from 'lodash'

import Group from 'src/06-shared/ui/Group'
import Skeleton from 'src/06-shared/ui/Skeleton'

const data = new Array(15).fill(null).map(() => ({ height: 32, radius: 16, width: random(90, 150) }))

function NewsCategoriesGroupSkeleton() {
  return (
    <Group padding='sm'>
      {data.map((props, index) => <Skeleton key={index} {...props} />)}
    </Group>
  )
}

export default NewsCategoriesGroupSkeleton