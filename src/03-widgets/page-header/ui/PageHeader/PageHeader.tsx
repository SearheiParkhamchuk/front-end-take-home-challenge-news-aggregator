'use client'
import Logo from '@/05-entities/app/ui/Logo'

import { HeaderInner } from './styles'

function PageHeader({ ...rest }: {}) {
  return (
    <HeaderInner {...rest}>
      <Logo />
    </HeaderInner>
  )
}

export default PageHeader
