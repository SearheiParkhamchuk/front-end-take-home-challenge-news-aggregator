import { type AlertProps as MuiAlertProps } from '@mui/material'
import { type ReactNode } from 'react'

export type AlertProps =
  Pick<MuiAlertProps, 'children' | 'severity' | 'color'> &
  { closable?: boolean, title?: ReactNode }
