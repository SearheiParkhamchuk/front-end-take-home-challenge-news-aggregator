import { type PropsWithChildren, type ReactNode } from 'react'

export type PageErrorProps = PropsWithChildren<{
  title: string
  description?: ReactNode
}>
