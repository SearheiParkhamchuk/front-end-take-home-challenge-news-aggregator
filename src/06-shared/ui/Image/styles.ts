'use client'

import { styled } from '@/06-shared/lib/theme/styled'

export const Container = styled('div')<{ $width?: string | number }>`
  position: relative;
`

export const NoImagePlug = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  color: ${({ theme }) => theme.palette.grey[500]};
  background-color: ${({ theme }) => theme.palette.grey[100]};
`
