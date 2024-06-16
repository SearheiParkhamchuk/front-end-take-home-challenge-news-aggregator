import DynamicModal from 'src/06-shared/ui/Modal/DynamicModal'

import { type ArticlesPreferencesModalProps } from './types'

function ArticlesPreferencesModal({ onClose, opened, children }: ArticlesPreferencesModalProps) {
  return (
    <DynamicModal
      closeButtonAriaLabel='Close feed preferences modal'
      opened={opened}
      size='lg'
      title='Feed preferences'
      onClose={onClose}
    >
      {children}
    </DynamicModal>
  )
}

export default ArticlesPreferencesModal