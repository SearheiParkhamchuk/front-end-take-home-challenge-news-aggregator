import path from 'path'
import { fileURLToPath } from 'url'

import bundleAnalyzer from '@next/bundle-analyzer'

import createNextIntlPlugin from 'next-intl/plugin'

const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)
const withNextIntl = createNextIntlPlugin()
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.BUILD_ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', 'lodash'],
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
  poweredByHeader: false,
  output: process.env.BUILD_STANDALONE === 'true' ? 'standalone' : undefined
}

export default withBundleAnalyzer(withNextIntl(nextConfig))
