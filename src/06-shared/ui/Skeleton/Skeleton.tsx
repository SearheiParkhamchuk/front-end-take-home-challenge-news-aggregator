import { Skeleton as MSkeleton } from '@mantine/core'

import { type SkeletonProps } from './types'

function Skeleton({ children, width, height = 5, circle, radius }: SkeletonProps) {
  return (
    <MSkeleton
      animate
      visible
      circle={circle}
      height={height}
      radius={radius}
      width={width}
    >
      {children}
    </MSkeleton>
  )
}

export default Skeleton
