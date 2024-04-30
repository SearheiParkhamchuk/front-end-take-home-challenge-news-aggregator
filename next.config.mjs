import path from 'path'
import { fileURLToPath } from 'url'

import withPlaiceholder from '@plaiceholder/next'
const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)

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
  }
}

export default withPlaiceholder(nextConfig)
