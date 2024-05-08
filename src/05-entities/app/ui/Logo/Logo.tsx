import { Text } from '@mantine/core'

import styles from './styles.module.scss'

function Logo({ ...rest }: {}) {
  return <Text {...rest} className={styles.logo}>Good News Everyone!</Text>
}

export default Logo
