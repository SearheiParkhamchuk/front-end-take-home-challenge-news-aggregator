'use client'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { type PropsWithChildren } from 'react'

import { cssVariablesResolver, theme } from '@/06-shared/lib/theme'

function ThemeProvider({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider
        cssVariablesResolver={cssVariablesResolver}
        defaultColorScheme='auto'
        theme={theme}
      >
        {children}
      </MantineProvider>
    </>
  )
}

export default ThemeProvider
