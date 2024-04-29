import NextImage from 'next/image'

import { type ImageProps } from './types'

function Image({ src, alt, width, height, external, ...rest }: ImageProps) {
  return <NextImage fill={external} {...rest} alt={alt} height={height} src={src} width={width} />
}

export default Image
