import { IconPhotoOff } from '@tabler/icons-react'
import NextImage from 'next/image'

import styles from './styles.module.scss'
import { type ImageProps } from './types'

function Image({ src, alt, width, height, external, sizes, className, ...rest }: ImageProps) {
  if (!src) {
    return (
      <div className={`${styles['no-image-plug']} ${className}`} {...rest}>
        <IconPhotoOff style={{ width: '4rem', height: '4rem' }} />
      </div>
    )
  }

  return (
    <NextImage
      {...rest}
      alt={alt}
      className={`${className} ${styles.image}`}
      fill={external}
      height={height}
      sizes={sizes}
      src={src}
      width={width}
    />
  )
}

export default Image
