import MuiSkeleton from '@mui/material/Skeleton'

import { type SkeletonProps } from './types'

function Skeleton({ children, width, height, variant }: SkeletonProps) {
  return <MuiSkeleton animation='wave' height={height} variant={variant} width={width}>{children}</MuiSkeleton>
}

export default Skeleton
