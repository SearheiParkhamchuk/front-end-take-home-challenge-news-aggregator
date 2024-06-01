import { type ReactElement } from 'react'

export type AnimationProps = {
  children: (props: { className: string }) => ReactElement
  variant: 'pulse' | 'blur' | 'none'
}
