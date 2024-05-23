import { useMantineColorScheme } from '@mantine/core'

export function useColorScheme() {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme({ keepTransitions: true })
  return { toggleColorScheme, colorScheme }
}
