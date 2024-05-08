import { type MantineColor } from '@mantine/core'
import { IconAlertCircle, IconAlertTriangle, IconCheck, IconInfoCircle } from '@tabler/icons-react'
import { type ReactElement } from 'react'

import { type AlertVariant } from './types'

export const ALERT_VARIANTS: Record<AlertVariant, { color: MantineColor, icon: ReactElement }> = {
  'error': { color: 'red', icon: <IconAlertCircle /> },
  'info': { color: 'blue', icon: <IconInfoCircle /> },
  'success': { color: 'green', icon: <IconCheck /> },
  'warning': { color: 'yellow', icon: <IconAlertTriangle /> }
}
