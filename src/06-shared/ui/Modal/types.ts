import { type ModalProps as MantineModalProps } from '@mantine/core';

export type ModalProps = Pick<
  MantineModalProps,
  'children' | 'title' | 'opened' | 'onClose' | 'closeOnClickOutside' | 'closeOnEscape' | 'size' | 'withCloseButton'
> & { closeButtonAriaLabel?: string };
