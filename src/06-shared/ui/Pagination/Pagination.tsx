import MuiPagiantion from '@mui/material/Pagination'

import PaginationItem from '@mui/material/PaginationItem'

import Link from 'next/link'

import { type PaginationProps } from './types'

function Pagination({ page }: PaginationProps) {
  return (
    <MuiPagiantion
      showFirstButton
      count={Infinity}
      page={page}
      renderItem={(item) => (
        <PaginationItem component={Link} href={{ query: { page: item.page } }} {...item} />
      )}
      showLastButton={false}
      siblingCount={1}
    />
  )
}

export default Pagination
