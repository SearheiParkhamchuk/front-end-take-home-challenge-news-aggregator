'use client'
import { styled } from '@/06-shared/lib/theme/styled'

export const Grid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: ${({ theme }) => theme.spacing(1)};
`
