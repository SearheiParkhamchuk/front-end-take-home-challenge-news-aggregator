import { type StackProps as MuiStackProps } from '@mui/material'

export type StackProps = Pick<
MuiStackProps, 'children' | 'className' | 'spacing' | 'direction' | 'alignItems' | 'justifyContent'
> & { divider?: boolean }
