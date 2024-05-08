import { type TitleProps as MantineTitleProps } from '@mantine/core'

export type TextColor = 'text-primary' | 'text-secondary' | 'primary'

export type TitleProps =
Pick<MantineTitleProps, 'order' | 'size' | 'children' | 'textWrap' | 'lineClamp' | 'className'>
& { color?: TextColor }
