import { type SwitchProps as MantineSwitchProps } from '@mantine/core'
export type SwitchProps = Pick<
MantineSwitchProps,
'onLabel' | 'offLabel' | 'size' | 'checked' | 'onChange' | 'disabled' | 'className'
>
