import { IconAdjustments } from '@tabler/icons-react'

import Button from 'src/06-shared/ui/Button'
import Tooltip from 'src/06-shared/ui/Tooltip'

import { type ArticlesPreferencesButtonProps } from './types'

function ArticlesPreferencesButton({ onClick }: ArticlesPreferencesButtonProps) {
  return (
    <Tooltip label='Feed preferences'>
      <Button onClick={onClick}>
        <IconAdjustments />
      </Button>
    </Tooltip>
  )
}

export default ArticlesPreferencesButton