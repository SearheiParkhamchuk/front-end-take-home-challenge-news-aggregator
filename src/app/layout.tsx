import { Notifications } from '@mantine/notifications'
import { GoogleAnalytics } from '@next/third-parties/google'
import { type Metadata } from 'next/types'
import { type ReactNode } from 'react'

import CacheProvider from 'src/01-app/cache/lib/providers/QueryClientProvider'
import { IntlProvider } from 'src/01-app/intl/lib/providers/IntlProvider'
import ThemeProvider from 'src/01-app/theme/lib/providers/ThemeProvider'
import GlobalStyles from 'src/01-app/theme/styles/GlobalStyles'
import PageFooter from 'src/03-widgets/page-footer/ui/PageFooter'
import PageHeader from 'src/03-widgets/page-header/ui/PageHeader'
import { getLocale } from 'src/06-shared/lib/intl/get-locale'
import SingleColumnLayout from 'src/06-shared/ui/Layouts/SingleColumnLayout'

const TITLE = `${process.env.NEXT_PUBLIC_APP_NAME} | Global News Aggregator - Your Infinite Feed of World News.`;
const DESCRIPTION = `
  Stay updated with the latest world news from diverse sources.
  Our global news aggregator provides an endless stream of articles, ensuring you never miss a story.
  Dive into the infinite feed of breaking news, analysis, and updates from around the globe.
`;
const SITE_NAME = process.env.NEXT_PUBLIC_APP_NAME;
const IMAGE = '/assets/favicons/web/favicon.png';

export function generateMetadata(): Metadata {
  return {
    title: {
      template: `${process.env.NEXT_PUBLIC_APP_NAME} | %s`,
      default: TITLE
    },
    description: DESCRIPTION,
    applicationName: 'Good News Everyone',
    keywords: 'world news,news aggregator,latest news,global news,news articles,breaking news',
    verification: {
      google: process.env.NEXT_SERVER_APP_VERIFICATION_GOOGLE,
      me: process.env.NEXT_SERVER_APP_VERIFICATION_ME,
    },
    openGraph: {
      type: 'website',
      url: process.env.NEXT_SERVER_APP_ORIGIN,
      title: TITLE,
      description: DESCRIPTION,
      siteName: SITE_NAME,
      images: IMAGE,
    },
    metadataBase: new URL(process.env.NEXT_SERVER_APP_ORIGIN),
  };
}

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
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_GAID} />
      </body>
    </html>
  )
}
