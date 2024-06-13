import { dynamicImport } from 'src/06-shared/lib/utils/browser/dynamic-import';

import { type ModalProps } from './types';

const Modal = dynamicImport(async () => import('./Modal'), { ssr: false, variant: 'modal' })

function DynamicModal(props: ModalProps) {
  if (!props.opened) return null

  return <Modal {...props} />
}

export default DynamicModal