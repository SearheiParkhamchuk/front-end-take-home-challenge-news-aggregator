import Link from 'src/06-shared/ui/Link'

import { socialDataMap } from './model'
import styles from './styles.module.scss'
import { type LinkSocialProps } from './types'

function LinkSocial({ href, social, monochrome }: LinkSocialProps) {

  return (
    <Link
      className={`${styles.social} ${styles[social]} ${monochrome ? styles.monochrome : ''}`}
      decoration='none'
      href={href}
      target='_blank'
      title={socialDataMap[social].title}
    >
      {socialDataMap[social].icon}
    </Link>
  )
}

export default LinkSocial