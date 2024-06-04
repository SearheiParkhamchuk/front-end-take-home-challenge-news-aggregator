import Image from 'src/06-shared/ui/Image'

import LayoutError from 'src/06-shared/ui/LayoutError'

import { type PageErrorProps } from './types'

function LayoutGeneralError({ title, description, children }: PageErrorProps) {
  return (
    <LayoutError
      description={description}
      ErrorImage={
        <Image alt={title} src='/assets/images/error.png' />
      }
      title={title}
    >
      {children}
    </LayoutError>
  )
}

export default LayoutGeneralError
