import { type MantineColorScheme } from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'

import { useEffect, useState } from 'react'

import { useColorScheme } from 'src/06-shared/lib/theme/useColorScheme'
import { useTheme } from 'src/06-shared/lib/theme/useTheme'
import Switch from 'src/06-shared/ui/Switch'
import Tooltip from 'src/06-shared/ui/Tooltip'

function ToggleThemeButton() {
  const { toggleColorScheme, colorScheme } = useColorScheme()
  const [clientSideColorScheme, setClientSideColorScheme] = useState<MantineColorScheme>('auto')
  const theme = useTheme()

  useEffect(() => { setClientSideColorScheme(colorScheme) }, [colorScheme])

  return (
    <Tooltip label={clientSideColorScheme === 'dark' ? 'Light mode' : 'Dark mode'}>
      <div>
        <Switch
          checked={clientSideColorScheme === 'dark'}
          offLabel={<IconMoon color={theme.colors.blue[6]} />}
          size='md'
          onChange={toggleColorScheme}
          onLabel={<IconSun color={theme.colors.yellow[2]} />}
        />
      </div>
    </Tooltip>
  )
}

export default ToggleThemeButton
