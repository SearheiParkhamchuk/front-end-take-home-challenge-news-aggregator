import { type TextInputProps } from '@mantine/core'

export type InputTextProps = Pick<
TextInputProps,
| 'disabled'
| 'id'
| 'name'
| 'onChange'
| 'onFocus'
| 'onBlur'
| 'placeholder'
> & { value: string }
