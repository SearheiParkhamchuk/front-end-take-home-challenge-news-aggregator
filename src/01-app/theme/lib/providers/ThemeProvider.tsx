'use client'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { type PropsWithChildren } from 'react'

import { theme } from '@/06-shared/lib/theme'

function ThemeProvider({ children }: PropsWithChildren<{}>) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
