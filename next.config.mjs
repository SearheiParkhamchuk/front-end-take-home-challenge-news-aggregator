import path from 'path'
import { fileURLToPath } from 'url'

import createNextIntlPlugin from 'next-intl/plugin'

const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)
const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
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
  poweredByHeader: false
}

export default withNextIntl(nextConfig)
