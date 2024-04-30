'use client'
import { Collapse } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

import { useToggle } from '@/06-shared/lib/utils/hooks/useToggle'

import { type AlertProps } from './types'

function Alert({
  children,
  severity,
  title,
  color,
  closable,
  ...rest
}: AlertProps) {
  const [open, { off }] = useToggle(true)

  return (
    <Collapse in={open}>
      <MuiAlert
        color={color}
        severity={severity}
        variant='outlined'
        onClose={closable ? off : undefined}
        {...rest}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {children}
      </ MuiAlert>
    </Collapse>
  )
}

export default Alert
