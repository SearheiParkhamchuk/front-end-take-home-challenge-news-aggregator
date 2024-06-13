import { Modal as MantineModal } from '@mantine/core'

import { type ModalProps } from './types'

function Modal({
  children,
  title,
  opened,
  onClose,
  closeOnClickOutside,
  closeOnEscape,
  withCloseButton,
  size,
  closeButtonAriaLabel
}: ModalProps) {
  return (
    <MantineModal
      closeButtonProps={{ 'aria-label': closeButtonAriaLabel }}
      closeOnClickOutside={closeOnClickOutside}
      closeOnEscape={closeOnEscape}
      keepMounted={false}
      opened={opened}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 2,
      }}
      size={size}
      title={title}
      withCloseButton={withCloseButton}
      onClose={onClose}
    >
      {children}
    </MantineModal>
  )
}

export default Modal
