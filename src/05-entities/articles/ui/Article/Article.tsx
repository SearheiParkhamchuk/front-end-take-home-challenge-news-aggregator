import Image from '@/06-shared/ui/Image'

import Link from '@/06-shared/ui/Link'
import Stack from '@/06-shared/ui/Stack'
import Typography from '@/06-shared/ui/Typography'

import { Description } from './styles'
import { type ArticleProps } from './types'
import ArticleLayout from '../ArticleLayout'

function Article({ publishedAt, alt, src, title, description, source }: ArticleProps) {
  return (
    <ArticleLayout
      Content={
        <>
          <Typography variant='h6'>{title}</Typography>
          <Description color='text.light' dangerouslySetInnerHTML={{ __html: description }} variant='body1' />
        </>
      }
      Footer={
        <>
          <Stack direction='row' spacing={0.5}>
            <Typography color='text' variant='body2'>Published at:</Typography>
            <Typography color='primary' variant='caption'>{publishedAt.toDateString()}</Typography>
          </Stack>
          <Stack direction='row' spacing={0.5}>
            <Typography color='text' variant='body2'>Source:</Typography>
            <Typography color='primary' variant='caption'>
              <Link href={source.src} rel='noopener noferrer' target='_blank'>{source.name}</Link>
            </Typography>
          </Stack>
        </>
      }
      Image={<Image external alt={alt} src={src} />}
    />
  )
}

export default Article
