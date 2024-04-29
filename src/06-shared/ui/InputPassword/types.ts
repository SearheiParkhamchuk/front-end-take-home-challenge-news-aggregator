import { type TextFieldProps } from '@mui/material'

export type InputPasswordProps = Pick<
TextFieldProps,
| 'disabled'
| 'error'
| 'focused'
| 'fullWidth'
| 'helperText'
| 'id'
| 'label'
| 'name'
| 'onChange'
| 'placeholder'
| 'required'
| 'autoComplete'
| 'onFocus'
| 'onBlur'
> & { value: string, passwordRequirements?: boolean }
