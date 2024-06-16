import InfiniteScroll from 'src/06-shared/ui/InfiniteScroll'
import ScrollToTop from 'src/06-shared/ui/ScrollToEdge'
import Stack from 'src/06-shared/ui/Stack'

import { type InfiniteFeedProps } from './types'

function InfiniteFeed({ LoadNext, LoadPrevious, children, onLastPage, onPage }: InfiniteFeedProps) {
  return (
    <Stack>
      {LoadPrevious && <Stack align='center'>
        {LoadPrevious}
      </Stack>}
      <InfiniteScroll onLastPage={onLastPage} onPage={onPage}>
        {children}
      </InfiniteScroll>
      <Stack align='center'>
        {LoadNext}
      </Stack>
      <ScrollToTop />
    </Stack>
  )
}

export default InfiniteFeed