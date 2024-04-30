import ImageNotSupported from '@mui/icons-material/ImageNotSupported'
import NextImage from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

import Icon from '@/06-shared/ui/Icon'

import { NoImagePlug } from './styles'
import { type ImageProps } from './types'

async function Image({ src, alt, width, height, external, ...rest }: ImageProps) {
  if (!src) {
    return (
      <NoImagePlug {...rest}>
        <Icon Component={ImageNotSupported} size='inherit' />
      </NoImagePlug>
    )
  }

  const buffer = await fetch(src).then(async (response) => Buffer.from(await response.arrayBuffer()))
  const { base64 } = await getPlaiceholder(buffer)

  return (
    <NextImage
      {...rest}
      alt={alt}
      blurDataURL={base64}
      fill={external}
      height={height}
      placeholder='blur'
      src={src}
      width={width}
    />
  )
}

export default Image
