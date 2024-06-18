import Image from 'src/06-shared/ui/Image'
import Link from 'src/06-shared/ui/Link'

import Text from 'src/06-shared/ui/Text'

import styles from './styles.module.scss'

function Logo() {
  return (
    <Link reload className={styles.link} decoration='none' href='/' >
      <Image alt='logo' height={24} src='/assets/images/logo.svg' width='auto' />
      <Text size='md' >{process.env.NEXT_PUBLIC_APP_NAME}</Text>
    </Link>
  )
}

export default Logo
