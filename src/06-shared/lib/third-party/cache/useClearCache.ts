import { type QueryFilters, useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'

export function useClearCache() {
  const queryClient = useQueryClient()

  return useCallback((filters: QueryFilters) => {
    queryClient.removeQueries(filters)
  }, [queryClient])
}
