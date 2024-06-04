'use client'
import { Alert as MAlert, Transition } from '@mantine/core'

import { useToggle } from 'src/06-shared/lib/utils/hooks/useToggle'

import { ALERT_VARIANTS } from './data'
import { type AlertProps } from './types'

function Alert({
  children,
  title,
  closable,
  variant,
  ...rest
}: AlertProps) {
  const [open, { off }] = useToggle(true)

  return (
    <Transition mounted={open} transition='pop'>
      {(styles) => (
        <MAlert
          {...rest}
          autoContrast
          color={ALERT_VARIANTS[variant].color}
          icon={ALERT_VARIANTS[variant].icon}
          style={styles}
          title={title}
          withCloseButton={closable}
          onClose={off}
        >
          {children}
        </ MAlert>
      )}
    </Transition>
  )
}

export default Alert
