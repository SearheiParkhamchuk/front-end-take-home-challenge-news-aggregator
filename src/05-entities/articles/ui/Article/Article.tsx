import { Divider } from '@mui/material'

import Image from '@/06-shared/ui/Image'

import Stack from '@/06-shared/ui/Stack'
import Typography from '@/06-shared/ui/Typography'

import { ArticleImageContainer, Container } from './styles'
import { type ArticleProps } from './types'

function Article({ publishedAt, alt, src, title, description, ...rest }: ArticleProps) {
  return (
    <Container {...rest}>
      <ArticleImageContainer>
        <Image external alt={alt} src={src} />
      </ArticleImageContainer>
      <Stack spacing={0.5}>
        <Typography variant='h6'>
          {title}
        </Typography>
        <Typography color='text.light' variant='body1'>
          {description.slice(0, 100)}...
        </Typography>
        <Divider sx={{ opacity: '0.6' }} variant='middle' />
        <Stack direction='row' spacing={0.5}>
          <Typography color='text' variant='body2'>Published at:</Typography>
          <Typography color='primary' variant='caption'>{publishedAt.toLocaleDateString()}</Typography>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Article
