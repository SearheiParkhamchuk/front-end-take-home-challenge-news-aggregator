import { TextInput } from '@mantine/core'

import { IconSearch } from '@tabler/icons-react'
import { type ForwardedRef, forwardRef } from 'react'

import styles from './styles.module.scss'
import { type InputTextProps } from './types'

function InputSearch({
  disabled,
  id,
  name,
  onChange,
  onBlur,
  onFocus,
  placeholder = 'Search',
  value,
  ...rest
}: InputTextProps, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <TextInput
      {...rest}
      autoComplete='on'
      className={styles.container}
      disabled={disabled}
      id={id}
      label={null}
      name={name}
      placeholder={placeholder}
      ref={ref}
      rightSection={<IconSearch />}
      type='search'
      value={value}
      variant='filled'
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
    />
  )
}

const ForwardedInputSearch = forwardRef<HTMLInputElement, InputTextProps>(InputSearch)
ForwardedInputSearch.displayName = 'InputSearch'

export default ForwardedInputSearch
