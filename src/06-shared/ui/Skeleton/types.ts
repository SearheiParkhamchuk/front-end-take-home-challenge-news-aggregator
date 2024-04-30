import { type SkeletonProps as MuiSkeletonProps } from '@mui/material'

export type SkeletonProps = Pick<MuiSkeletonProps, 'children' | 'width' | 'height' | 'variant'>
