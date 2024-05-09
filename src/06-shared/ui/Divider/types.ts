import { type DividerProps as MantineDividerProps } from '@mantine/core'

export type ComponentColors = 'primary' | 'initial'

export type DividerProps = Pick<MantineDividerProps, 'label' | 'labelPosition' | 'orientation' | 'className'> & { color?: ComponentColors }
