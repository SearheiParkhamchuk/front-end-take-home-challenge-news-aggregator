'use client'

import Pagination from '@/06-shared/ui/Pagination'

function ArticlesPagination({ page }: { page?: string }) {
  return (
    <Pagination page={page ? Number(page) : 1} />
  )
}

export default ArticlesPagination
