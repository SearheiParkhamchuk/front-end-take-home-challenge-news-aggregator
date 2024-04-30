import MuiPagiantion from '@mui/material/Pagination'

import PaginationItem from '@mui/material/PaginationItem'

import { useSearchParams } from '@/06-shared/lib/third-party/router/useSearchParams'
import Link from '@/06-shared/ui/Link'

import { type PaginationProps } from './types'

function Pagination({ page }: PaginationProps) {
  const [, { merge }] = useSearchParams()

  return (
    <MuiPagiantion
      showFirstButton
      count={Infinity}
      page={page}
      renderItem={(item) => {
        return (
          <PaginationItem
            component={Link}
            href={{ query: merge(new URLSearchParams({ page: item.page?.toString() ?? '' })).toString() }}
            {...item}
          />
        )
      }}
      showLastButton={false}
      siblingCount={1}
    />
  )
}

export default Pagination
