import { type InputBaseProps } from '@mui/material/InputBase'
import { type TextFieldProps } from '@mui/material/TextField'

export type InputTextProps = Pick<
TextFieldProps,
| 'disabled'
| 'focused'
| 'id'
| 'label'
| 'name'
| 'onChange'
| 'onFocus'
| 'onBlur'
| 'placeholder'
| 'autoComplete'
> & { value: string } & Pick<InputBaseProps, 'startAdornment' | 'endAdornment'>
