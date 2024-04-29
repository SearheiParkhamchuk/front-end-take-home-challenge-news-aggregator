import { type ReactElement } from 'react'

import { call } from '@/06-shared/lib/utils/misc/call'

import { type IconProps } from './types'

function Icon({ Component, size = 'small', className, 'aria-label': ariaLabel, ...rest }: IconProps): ReactElement {
  const fontSize = call(() => {
    switch (size) {
      case 'small': return '1rem'
      case 'x-medium': return '1.25rem'
      case 'medium': return '1.5rem'
      case 'large': return '2rem'
      case 'extra-large': return '2.5rem'
      case 'x-extra-large': return '3rem'
      case 'inherit': return 'inherit'
    }
  })

  return (
    <Component
      {...rest}
      aria-label={ariaLabel}
      classes={{
        root: className
      }}
      className={className}
      sx={{ fontSize, fill: 'currentcolor' }}
    />
  )
}

export default Icon
