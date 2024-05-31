import { Text } from '@mantine/core'

import Link from '@/06-shared/ui/Link'

import styles from './styles.module.scss'

function Logo({ ...rest }: {}) {
  return (
    <Link decoration='none' href={'/'}>
      <Text {...rest} className={styles.logo}>
        Good News Everyone!
      </Text>
    </Link>
  )
}

export default Logo
