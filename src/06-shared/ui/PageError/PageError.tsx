import Image from '@/06-shared/ui/Image'
import Stack from '@/06-shared/ui/Stack'
import Text from '@/06-shared/ui/Text'
import Title from '@/06-shared/ui/Title'

import styles from './styles.module.scss'
import { type PageErrorProps } from './types'

function PageError({ title, description }: PageErrorProps) {
  return (
    <Stack className={styles['not-found']}>
      <Image alt='Not Found' height={320} src='/assets/images/not-found.png' width={320} />
      <Title>{title}</Title>
      {description ?? <Text>{description}</Text>}
    </Stack>
  )
}

export default PageError
