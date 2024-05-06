'use client'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { type PropsWithChildren } from 'react'

import { cssVariablesResolver, theme } from '@/06-shared/lib/theme'

function ThemeProvider({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="dark" />
      <MantineProvider
        cssVariablesResolver={cssVariablesResolver}
        defaultColorScheme='dark'
        theme={theme}
      >
        {children}
      </MantineProvider>
    </>
  )
}

export default ThemeProvider
