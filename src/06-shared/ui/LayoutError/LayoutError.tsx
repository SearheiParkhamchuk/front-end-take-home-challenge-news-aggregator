import Stack from 'src/06-shared/ui/Stack'
import Text from 'src/06-shared/ui/Text'
import Title from 'src/06-shared/ui/Title'

import styles from './styles.module.scss'
import { type LayoutErrorProps } from './types'

function LayoutError({ description, title, children, ErrorImage }: LayoutErrorProps) {
  return (
    <Stack align='center' className={styles.container}>
      <div className={styles['image-container']}>
        {ErrorImage}
      </div>
      <Title responsive textAlign='center'>{title}</Title>
      {description ?? <Text>{description}</Text>}
      {children}
    </Stack>
  )
}

export default LayoutError
