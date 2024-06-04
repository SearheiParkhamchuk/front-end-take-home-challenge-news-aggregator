import { Notifications } from '@mantine/notifications'
import { type ReactNode } from 'react'

import CacheProvider from 'src/01-app/cache/lib/providers/QueryClientProvider'
import { IntlProvider } from 'src/01-app/intl/lib/providers/IntlProvider'
import ThemeProvider from 'src/01-app/theme/lib/providers/ThemeProvider'
import GlobalStyles from 'src/01-app/theme/styles/GlobalStyles'
import PageFooter from 'src/03-widgets/page-footer/ui/PageFooter'
import PageHeader from 'src/03-widgets/page-header/ui/PageHeader'
import { getLocale } from 'src/06-shared/lib/intl/get-locale'
import SingleColumnLayout from 'src/06-shared/ui/Layouts/SingleColumnLayout'

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <head>
        <link href="/assets/favicons/web/favicon.png" rel="icon" sizes="96x96" />
        <link href="/assets/favicons/android/favicon.png" rel="icon" sizes="192x192" type="image/png" />
        <link href="/assets/favicons/ios/favicon.png" rel="apple-touch-icon" sizes="180x180" type="image/png" />
        <link href="/assets/favicons/macos/favicon.svg" rel="mask-icon"></link>
      </head>
      <body>
        <CacheProvider>
          <ThemeProvider>
            <IntlProvider>
              <Notifications />
              <SingleColumnLayout
                body={children}
                footer={<PageFooter />}
                header={<PageHeader />}
              />
            </IntlProvider>
            <GlobalStyles />
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
