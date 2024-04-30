'use client'
import { styled } from '@/06-shared/lib/theme/styled'
import Typography from '@/06-shared/ui/Typography'

export const ArticleImageContainer = styled('div')`
  position: relative;
  height: clamp(200px, 20vw, 300px);
  border-radius: 0.5rem;
  overflow: hidden;
`

export const Description = styled(Typography)`
  flex-grow: 1;
`
