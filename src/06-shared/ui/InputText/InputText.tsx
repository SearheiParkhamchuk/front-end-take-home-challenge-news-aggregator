import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'

import { type ForwardedRef, forwardRef } from 'react'

import { type InputTextProps } from './types'

function InputText({
  color,
  disabled,
  endAdornment,
  error,
  focused,
  fullWidth,
  helperText,
  id,
  label,
  name,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  required,
  startAdornment,
  value,
  type,
  autoComplete,
  ...rest
}: InputTextProps, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <TextField
      {...rest}
      autoComplete={autoComplete}
      color={color}
      disabled={disabled}
      error={error}
      focused={focused}
      fullWidth={fullWidth}
      helperText={helperText}
      id={id}
      InputProps={{
        endAdornment: endAdornment && <InputAdornment position='end'>{endAdornment}</InputAdornment>,
        startAdornment: startAdornment && <InputAdornment position='start'>{startAdornment}</InputAdornment>
      }}
      inputRef={ref}
      label={label}
      name={name}
      placeholder={placeholder}
      required={required}
      size='small'
      type={type}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
    />
  )
}

const ForwardedInputText = forwardRef<HTMLInputElement, InputTextProps>(InputText)
ForwardedInputText.displayName = 'InputText'

export default ForwardedInputText
