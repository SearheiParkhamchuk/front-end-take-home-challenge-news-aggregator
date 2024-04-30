'use client'
import { Search } from '@mui/icons-material'
import { InputAdornment } from '@mui/material'
import TextField from '@mui/material/TextField'

import { type ForwardedRef, forwardRef } from 'react'

import { type InputTextProps } from './types'

function InputSearch({
  disabled,
  focused,
  id,
  label,
  name,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  value,
  ...rest
}: InputTextProps, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <TextField
      {...rest}
      fullWidth
      autoComplete='on'
      disabled={disabled}
      focused={focused}
      id={id}
      InputProps={{
        endAdornment: <InputAdornment position='end'><Search /></InputAdornment>
      }}
      inputRef={ref}
      label={label}
      name={name}
      placeholder={placeholder}
      size='small'
      type='search'
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
    />
  )
}

const ForwardedInputSearch = forwardRef<HTMLInputElement, InputTextProps>(InputSearch)
ForwardedInputSearch.displayName = 'InputSearch'

export default ForwardedInputSearch
