import { type InputBaseProps } from '@mui/material/InputBase'
import { type TextFieldProps } from '@mui/material/TextField'

export type InputTextProps = Pick<
TextFieldProps,
| 'color'
| 'disabled'
| 'error'
| 'focused'
| 'fullWidth'
| 'helperText'
| 'id'
| 'label'
| 'name'
| 'onChange'
| 'onFocus'
| 'onBlur'
| 'placeholder'
| 'required'
| 'type'
| 'autoComplete'
> & { value: string } & Pick<InputBaseProps, 'startAdornment' | 'endAdornment'>
