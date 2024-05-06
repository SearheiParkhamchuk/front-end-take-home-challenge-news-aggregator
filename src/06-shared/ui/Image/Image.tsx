import { IconPhotoOff } from '@tabler/icons-react'
import NextImage from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

import styles from './styles.module.scss'
import { type ImageProps } from './types'

async function Image({ src, alt, width, height, external, ...rest }: ImageProps) {
  if (!src) {
    return (
      <div className={styles['no-image-plug']} {...rest}>
        <IconPhotoOff style={{ width: '4rem', height: '4rem' }} />
      </div>
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
