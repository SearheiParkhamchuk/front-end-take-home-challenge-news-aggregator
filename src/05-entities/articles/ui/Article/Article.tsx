import Date from '@/06-shared/ui/Date'
import Group from '@/06-shared/ui/Group'
import Image from '@/06-shared/ui/Image'
import Link from '@/06-shared/ui/Link'
import Text from '@/06-shared/ui/Text'
import Title from '@/06-shared/ui/Title'

import styles from './styles.module.scss'
import { type ArticleProps } from './types'
import ArticleLayout from '../ArticleLayout'

function Article({ publishedAt, alt, poster, title, description, source, orientation, sourceName, ...rest }: ArticleProps) {
  return (
    <ArticleLayout
      {...rest}
      Content={
        <>
          <Title color='primary' order={4}>
            <Link href={source} rel='noopener noferrer' target='_blank'>
              {title}
            </Link>
          </Title>
          <Text span className={styles.description} color='text-secondary' dangerouslySetInnerHTML={description} fz='sm' />
        </>
      }
      Footer={
        <>
          <Group align='center' gap='xs'>
            <Text span fz='sm'>Published at:</Text>
            <Date relative color='primary' date={publishedAt} fz='xs' />
          </Group>
          <Group align='center' gap='xs'>
            <Text span fz='sm'>Source:</Text>
            <Text color='primary' size='xs'>
              <Link href={source} rel='noopener noferrer' target='_blank'>{sourceName}</Link>
            </Text>
          </Group>
        </>
      }
      Image={<Image external alt={alt} className={styles.image} sizes='450px' src={poster} />}
      orientation={orientation}
    />
  )
}

export default Article
