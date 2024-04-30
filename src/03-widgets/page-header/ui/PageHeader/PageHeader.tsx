'use client'
import { Suspense } from 'react'

import AppSearch from '@/05-entities/app/ui/AppSearch'
import Logo from '@/05-entities/app/ui/Logo'

import { AppSearchContainer, HeaderInner } from './styles'

function PageHeader({ ...rest }: {}) {
  return (
    <HeaderInner {...rest}>
      <Logo />
      <Suspense>
        <AppSearchContainer>
          <AppSearch />
        </AppSearchContainer>
      </Suspense>
    </HeaderInner>
  )
}

export default PageHeader
