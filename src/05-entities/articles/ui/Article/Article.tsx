import { Divider } from '@mui/material'

import Image from '@/06-shared/ui/Image'

import Link from '@/06-shared/ui/Link'
import Stack from '@/06-shared/ui/Stack'
import Typography from '@/06-shared/ui/Typography'

import { ArticleImageContainer, Container, Description } from './styles'
import { type ArticleProps } from './types'

function Article({ publishedAt, alt, src, title, description, source, ...rest }: ArticleProps) {
  return (
    <Container {...rest}>
      <ArticleImageContainer>
        <Image external alt={alt} src={src} />
      </ArticleImageContainer>
      <Stack spacing={0.5}>
        <Typography variant='h6'>{title}</Typography>
        <Description color='text.light' dangerouslySetInnerHTML={{ __html: description }} variant='body1' />
        <Divider sx={{ opacity: '0.6' }} variant='middle' />
        <Stack direction='row' spacing={0.5}>
          <Typography color='text' variant='body2'>Published at:</Typography>
          <Typography color='primary' variant='caption'>{publishedAt.toLocaleDateString()}</Typography>
        </Stack>
        <Stack direction='row' spacing={0.5}>
          <Typography color='text' variant='body2'>Source:</Typography>
          <Typography color='primary' variant='caption'>
            <Link href={source.src} rel='noopener noferrer' target='_blank'>{source.name}</Link>
          </Typography>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Article
