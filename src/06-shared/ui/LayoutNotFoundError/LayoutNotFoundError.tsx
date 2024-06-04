import Image from 'src/06-shared/ui/Image'

import LayoutError from 'src/06-shared/ui/LayoutError'

import { type PageErrorProps } from './types'

function LayoutNotFoundError({ title, description }: PageErrorProps) {
  return (
    <LayoutError
      description={description}
      ErrorImage={
        <Image
          alt='Not Found'
          src='/assets/images/not-found.png'
        />
      }
      title={title}
    />
  )
}

export default LayoutNotFoundError
