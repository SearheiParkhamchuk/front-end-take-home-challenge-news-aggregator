import path from 'path'
import { fileURLToPath } from 'url'

import createNextIntlPlugin from 'next-intl/plugin'

const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)
const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(_dirname, 'styles')]
  },
  images: {
    remotePatterns: [
      {
        hostname: '*',
        port: ''
      }
    ]
  },
  publicRuntimeConfig: {},
  poweredByHeader: false,
  output: 'standalone'
}

export default withNextIntl(nextConfig)
