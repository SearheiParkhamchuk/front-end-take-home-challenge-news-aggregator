import path from 'path'
import { fileURLToPath } from 'url'

const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)

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

export default nextConfig
