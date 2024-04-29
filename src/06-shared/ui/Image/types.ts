export type ImageProps = {
  alt: string
  height: number
  src: string
  width: number
  external?: false
} | {
  alt: string
  external: true
  src: string
  height?: number
  width?: number
}
