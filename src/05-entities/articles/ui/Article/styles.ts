'use client'
import { styled } from '@/06-shared/lib/theme/styled'

export const Container = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  padding: clamp(0.25rem, 1vw, 1.5rem);
`

export const ArticleImageContainer = styled('div')`
  position: relative;
  height: clamp(200px, 20vw, 300px);
`
