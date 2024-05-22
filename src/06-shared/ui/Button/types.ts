import { type ButtonProps as MButtonProps } from '@mantine/core'
import { type ButtonHTMLAttributes, type HTMLAttributes } from 'react'

export type ButtonProps = Pick<
MButtonProps,
| 'children'
| 'className'
| 'rightSection'
| 'leftSection'
| 'disabled'
| 'fullWidth'
| 'loading'
| 'size'
| 'style'
| 'variant'
>
& Pick<HTMLAttributes<HTMLButtonElement>, 'aria-label' | 'onClick' | 'role' | 'tabIndex' | 'id'>
& Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>
