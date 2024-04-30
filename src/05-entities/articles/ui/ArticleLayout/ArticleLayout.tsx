import { Divider } from '@mui/material'

import Stack from '@/06-shared/ui/Stack'

import { ArticleImageContainer, Container } from './styles'
import { type ArticleLayoutProps } from './types'

function ArticleLayout({ Image, Content, Footer }: ArticleLayoutProps) {
  return (
    <Container>
      <ArticleImageContainer>
        {Image}
      </ArticleImageContainer>
      <Stack spacing={0.5}>
        {Content}
        <Divider sx={{ opacity: '0.6' }} variant='middle' />
        {Footer}
      </Stack>
    </Container>
  )
}

export default ArticleLayout
