import { IconPhotoOff } from '@tabler/icons-react'

import styles from './styles.module.scss'
import { type ImageProps } from './types'

function Image({ src, alt, className = '', withBackground, ...rest }: ImageProps) {
  if (!src) {
    return (
      <div className={`${styles['no-image-plug']} ${withBackground ? styles['image-bg'] : ''} ${className}`} {...rest}>
        <IconPhotoOff style={{ width: '4rem', height: '4rem' }} />
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...rest}
      alt={alt}
      className={`${className} ${styles.image} ${withBackground ? styles['image-bg'] : ''}`}
      loading='lazy'
      src={src}
    />
  )
}

export default Image
