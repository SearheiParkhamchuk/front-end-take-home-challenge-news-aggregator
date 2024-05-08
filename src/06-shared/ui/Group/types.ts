import { type GroupProps as MantineGroupProps } from '@mantine/core'

export type GroupProps = Pick<
MantineGroupProps, 'children' | 'className' | 'gap' | 'align' | 'justify' | 'grow'
>
