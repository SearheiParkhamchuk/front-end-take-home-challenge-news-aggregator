'use client'
import Logo from '@/05-entities/app/ui/Logo'

import { FooterInner } from './styles'

function PageHeader({ ...rest }: {}) {
  return (
    <FooterInner {...rest}>
      <Logo />
    </FooterInner>
  )
}

export default PageHeader
