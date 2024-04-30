type ConditionalImageProps =
| {
  height: number
  width: number
  external?: false
} | {
  external: true
  height?: number
  width?: number
}

export type ImageProps = {
  alt: string
  src: string | null
} & ConditionalImageProps
