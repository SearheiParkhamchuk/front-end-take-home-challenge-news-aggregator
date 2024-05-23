import { useMantineTheme } from '@mantine/core'

import { type Theme } from './index'

export function useTheme() {
  return useMantineTheme() as Theme
}
