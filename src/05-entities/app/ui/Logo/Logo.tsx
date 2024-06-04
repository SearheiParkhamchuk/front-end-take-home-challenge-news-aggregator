import { Text } from '@mantine/core'

import Link from 'src/06-shared/ui/Link'

import styles from './styles.module.scss'

function Logo({ ...rest }: {}) {
  return (
    <Link reload decoration='none' href='/' >
      <Text {...rest} className={styles.logo}>
        Good News Everyone!
      </Text>
    </Link>
  )
}

export default Logo
