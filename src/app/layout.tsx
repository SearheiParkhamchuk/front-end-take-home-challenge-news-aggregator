import { Notifications } from '@mantine/notifications'
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
      <head>
        <link href="/assets/favicons/web/favicon.png" rel="icon" sizes="96x96" />
        <link href="/assets/favicons/android/favicon.png" rel="icon" sizes="192x192" type="image/png" />
        <link href="/assets/favicons/ios/favicon.png" rel="apple-touch-icon" sizes="180x180" type="image/png" />
        <link href="/assets/favicons/macos/favicon.svg" rel="mask-icon"></link>
      </head>
      <body>
        <CacheProvider>
          <ThemeProvider>
            <Notifications />
            <SingleColumnLayout
              body={children}
              footer={<PageFooter />}
              header={<PageHeader />}
            />
            <GlobalStyles />
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
