import { ActionIcon } from '@mantine/core'
import { IconAdjustments } from '@tabler/icons-react'

import Tooltip from 'src/06-shared/ui/Tooltip'

import { type ArticlesPreferencesButtonProps } from './types'

function ArticlesPreferencesButton({ onClick }: ArticlesPreferencesButtonProps) {
  return (
    <Tooltip label='Feed preferences'>
      <ActionIcon aria-label='Open the feed preferences modal' size='md' onClick={onClick}>
        <IconAdjustments />
      </ActionIcon>
    </Tooltip>
  )
}

export default ArticlesPreferencesButton