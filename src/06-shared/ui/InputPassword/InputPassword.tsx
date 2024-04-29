'use client'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { TextField } from '@mui/material'

import { type ForwardedRef, forwardRef } from 'react'

import { useToggle } from '@/06-shared/lib/utils/hooks/useToggle'

import { containsNumber } from '@/06-shared/lib/utils/string/containsNumber'
import { isLowercase } from '@/06-shared/lib/utils/string/isLowercase'
import { isUppercase } from '@/06-shared/lib/utils/string/isUppercase'
import Icon from '@/06-shared/ui/Icon'
import IconButton from '@/06-shared/ui/IconButton'

import { PasswordRequirementsContainer } from './styles'
import { type InputPasswordProps } from './types'
import CheckItem from '../ListItemTick'

const MIN_CHARS = 10

const getAriaLabel = (valid: boolean) => {
  return valid ? 'password-requirement-ok' : 'password-requirement'
}

function InputPassword({
  disabled,
  error,
  focused,
  fullWidth,
  helperText,
  id,
  label,
  name,
  onChange,
  placeholder,
  required,
  value,
  passwordRequirements,
  autoComplete,
  onBlur,
  onFocus,
  ...rest
}: InputPasswordProps, ref: ForwardedRef<HTMLInputElement>) {
  const [showPassword, { toggle }] = useToggle(false)

  const isMinChars = value?.trim().length >= MIN_CHARS
  const atLeastOneNumber = containsNumber(value)
  const atLeastOneUppercaseChar = value?.split('').some(isUppercase)
  const atLeastOneLowercaseChar = value?.split('').some(isLowercase)

  return (
    <>
      <TextField
        {...rest}
        aria-autocomplete='list'
        aria-disabled={disabled}
        autoComplete={autoComplete}
        disabled={disabled}
        error={error}
        focused={focused}
        fullWidth={fullWidth}
        helperText={helperText}
        id={id}
        InputProps={{
          endAdornment: (
            <IconButton aria-label={showPassword ? 'Show password' : 'Hide password'} size='medium' onClick={toggle}>
              {showPassword ? <Icon Component={VisibilityOff} /> : <Icon Component={Visibility} />}
            </IconButton>
          )
        }}
        inputRef={ref}
        label={label}
        name={name}
        placeholder={placeholder}
        required={required}
        size='small'
        type={showPassword ? 'text' : 'password'}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
      />
      {passwordRequirements && (
        <PasswordRequirementsContainer>
          <CheckItem aria-label={getAriaLabel(isMinChars)} checked={isMinChars}>
            A minimum of 10 characters
          </CheckItem>
          <CheckItem aria-label={getAriaLabel(atLeastOneNumber)} checked={atLeastOneNumber}>
            At least one number
          </CheckItem>
          <CheckItem aria-label={getAriaLabel(atLeastOneUppercaseChar)} checked={atLeastOneUppercaseChar}>
            At least one uppercase letter
          </CheckItem>
          <CheckItem aria-label={getAriaLabel(atLeastOneLowercaseChar)} checked={atLeastOneLowercaseChar}>
            At least one lowercase letter
          </CheckItem>
        </PasswordRequirementsContainer>
      )}
    </>
  )
}

const ForwardedInputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(InputPassword)
ForwardedInputPassword.displayName = 'InputPassword'

export default ForwardedInputPassword
