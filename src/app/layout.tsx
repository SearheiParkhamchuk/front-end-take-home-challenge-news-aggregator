import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { type ReactNode } from 'react'

import CacheProvider from '@/01-app/cache/lib/providers/QueryClientProvider'
import ThemeProvider from '@/01-app/theme/lib/providers/ThemeProvider'
import GlobalStyles from '@/01-app/theme/styles/GlobalStyles'
import PageFooter from '@/03-widgets/page-footer/ui/PageFooter'
import PageHeader from '@/03-widgets/page-header/ui/PageHeader'
import SingleColumnLayout from '@/06-shared/ui/Layouts/SingleColumnLayout'

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <CacheProvider>
          <AppRouterCacheProvider>
            <ThemeProvider>
              <SingleColumnLayout
                body={children}
                footer={<PageFooter />}
                header={<PageHeader />}
              />
              <GlobalStyles />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
