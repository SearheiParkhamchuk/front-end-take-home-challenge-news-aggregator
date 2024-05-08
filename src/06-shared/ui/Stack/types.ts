import { type StackProps as MantineStackProps } from '@mantine/core'

export type StackProps = Pick<
MantineStackProps, 'children' | 'className' | 'gap' | 'align' | 'justify'
>
