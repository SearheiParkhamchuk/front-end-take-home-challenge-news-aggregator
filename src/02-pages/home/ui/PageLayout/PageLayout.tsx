import { type ReactElement } from 'react'

import Stack from '@/06-shared/ui/Stack'

function PageLayout({ TopPanel, Content, BottomPanel }: { BottomPanel: ReactElement, Content: ReactElement, TopPanel: ReactElement }) {
  return (
    <Stack>
      {TopPanel}
      {Content}
      {BottomPanel}
    </Stack>
  )
}

export default PageLayout
