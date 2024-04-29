import { type ReactNode } from 'react'

import ThemeProvider from '@/01-app/theme/lib/providers/ThemeProvider'
import GlobalStyles from '@/01-app/theme/styles/GlobalStyles'

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
          <GlobalStyles />
        </ThemeProvider>
      </body>
    </html>
  )
}
