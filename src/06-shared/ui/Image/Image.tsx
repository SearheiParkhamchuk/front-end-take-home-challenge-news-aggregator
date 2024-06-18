import { IconPhotoOff } from '@tabler/icons-react'

import styles from './styles.module.scss'
import { type ImageProps } from './types'

function Image({ src, alt, height = '100%', width = '100%', className = '', withBackground }: ImageProps) {
  if (!src) {
    return (
      <div className={`${styles['no-image-plug']} ${withBackground ? styles['image-bg'] : ''} ${className}`}>
        <IconPhotoOff style={{ width: '4rem', height: '4rem' }} />
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      className={`${className} ${withBackground ? styles['image-bg'] : ''}`}
      height={height}
      loading='lazy'
      src={src}
      width={width}
    />
  )
}

export default Image
