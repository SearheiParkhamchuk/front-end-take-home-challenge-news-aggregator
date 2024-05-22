import { type TextProps as MantineTextProps } from '@mantine/core'
import { type PropsWithChildren } from 'react'

export type TextColor = 'text-primary' | 'text-secondary' | 'primary'

export type DateProps = PropsWithChildren<
Pick<MantineTextProps, 'className' | 'size' | 'lineClamp' | 'inherit' | 'fz'>
& { date: Date, color?: TextColor, relative?: boolean }
>
