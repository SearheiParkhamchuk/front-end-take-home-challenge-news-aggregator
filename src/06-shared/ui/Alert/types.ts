import { type AlertProps as MAlertProps } from '@mantine/core'

export type AlertVariant = 'error' | 'info' | 'success' | 'warning'

export type AlertProps =
  Pick<MAlertProps, 'title' | 'children'> &
  { variant: AlertVariant, closable?: boolean }
