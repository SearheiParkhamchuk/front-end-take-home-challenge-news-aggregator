import { type MantineSpacing, type StackProps as MantineStackProps } from '@mantine/core'

export type StackProps = Pick<
MantineStackProps, 'children' | 'className' | 'align' | 'justify'
> & { gap?: MantineSpacing | 'none' }
