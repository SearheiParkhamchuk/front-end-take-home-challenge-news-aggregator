import { Skeleton as MSkeleton } from '@mantine/core'

import { type SkeletonProps } from './types'

function Skeleton({ children, width, height = 5, circle }: SkeletonProps) {
  return (
    <MSkeleton
      animate
      visible
      circle={circle}
      height={height}
      width={width}
    >
      {children}
    </MSkeleton>
  )
}

export default Skeleton
