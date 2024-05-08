import { type ReactElement } from 'react'

import Stack from '@/06-shared/ui/Stack'

function PageLayout({ TopPanel, Content }: { Content: ReactElement, TopPanel: ReactElement }) {
  return (
    <Stack>
      {TopPanel}
      {Content}
    </Stack>
  )
}

export default PageLayout
