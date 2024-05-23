type ConditionalImageProps =
| {
  height: number
  width: number
  external?: false
  sizes?: string
} | {
  external: true
  sizes: string
  height?: number
  width?: number
}

export type ImageProps = {
  alt: string
  src: string | null
  className?: string
} & ConditionalImageProps
