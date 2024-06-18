import Text from 'src/06-shared/ui/Text'

import { type CopyrightProps } from './types'

function Copyright({ appName }: CopyrightProps) {
  return <Text color='text-secondary' fz='xs'>Copyright &copy; {new Date().getUTCFullYear()} {appName}</Text>
}

export default Copyright