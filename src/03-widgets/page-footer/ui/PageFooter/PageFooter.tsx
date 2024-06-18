import Logo from 'src/05-entities/app/ui/Logo'

import Copyright from 'src/06-shared/ui/Copyright'

import Group from 'src/06-shared/ui/Group'
import LinkSocial from 'src/06-shared/ui/LinkSocial'

import Stack from 'src/06-shared/ui/Stack'

import styles from './styles.module.scss'

const appName = process.env.NEXT_PUBLIC_APP_NAME
const linkedInLink = process.env.NEXT_PUBLIC_SOCIAL_LINK_LINKED_IN

function PageFooter() {
  return (
    <footer className={styles.footer}>
      <Stack align='center'>
        <Group align='center' justify='space-between' w='100%'>
          <Logo />
          <LinkSocial monochrome href={linkedInLink} social='linked-in' />
        </Group>
        <Copyright appName={appName} />
      </Stack>
    </footer>
  )
}

export default PageFooter
