import { type PropsWithChildren, type ReactElement, type ReactNode } from 'react'

export type LayoutErrorProps = PropsWithChildren<{
  ErrorImage: ReactElement
  title: ReactNode
  description?: ReactNode
}>
