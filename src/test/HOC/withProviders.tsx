import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider/next-13.5'
import { type FunctionComponent } from 'react'

import ThemeProvider from 'src/01-app/theme/lib/providers/ThemeProvider'

export function withProviders<P extends object>(Component: FunctionComponent<P>) {
  return function WithProviders(props: P) {
    return (
      <MemoryRouterProvider>
        <ThemeProvider>
          <Component {...props} />
        </ThemeProvider>
      </MemoryRouterProvider>
    )
  }
}
